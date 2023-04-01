import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { privacy } from '../controllers/controllers'

//? Get
export const getPrivacy = app.get('/privacy', privacy.PrivacyController.getPrivacy)
export const getPrivacyId = app.get('/privacy/id', privacy.PrivacyController.getPrivacyId)

//* Post
export const postPrivacy = app.post('/privacy', middleware.auth.adminAuth, privacy.PrivacyController.createPrivacy)

//? Update
export const putPrivacy = app.put('/privacy', middleware.auth.adminAuth, privacy.PrivacyController.updatePrivacy)

//! Delete
export const deletePrivacy = app.delete('/privacy', middleware.auth.adminAuth, privacy.PrivacyController.deletePrivacy)