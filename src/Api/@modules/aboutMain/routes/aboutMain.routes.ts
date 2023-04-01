import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { aboutMain } from '../controllers/controllers'

//? Get
export const getAboutMain = app.get('/about', aboutMain.AboutMainController.getAboutMain)
export const getAboutMainId = app.get('/about/id', aboutMain.AboutMainController.getAboutMainId)

//* Post
export const postAboutMain = app.post('/about', [middleware.multer.aboutMainMultiUploads, middleware.auth.adminAuth], aboutMain.AboutMainController.createAboutMain)

//? Update
export const putAboutMain = app.put('/about', [middleware.multer.aboutMainMultiUploads, middleware.auth.adminAuth], aboutMain.AboutMainController.updateAboutMain)

//! Delete
export const deleteAboutMain = app.delete('/about', middleware.auth.adminAuth, aboutMain.AboutMainController.deleteAboutMain)