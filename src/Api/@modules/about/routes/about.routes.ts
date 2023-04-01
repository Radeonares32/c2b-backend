import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { about } from '../controllers/controllers'

//? Get
export const getAbout = app.get('/about-us', about.AboutController.getAbout)
export const getAboutId = app.get('/about-us/id', about.AboutController.getAboutId)

//* Post
export const postAbout = app.post('/about-us', [middleware.multer.aboutMultiUploads, middleware.auth.adminAuth], about.AboutController.createAbout)

//? Update
export const putAbout = app.put('/about-us', [middleware.multer.aboutMultiUploads, middleware.auth.adminAuth], about.AboutController.updateAbout)

//! Delete
export const deleteAbout = app.delete('/about-us', middleware.auth.adminAuth, about.AboutController.deleteAbout)