import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { main } from '../controllers/controllers'

//? Get
export const getMain = app.get('/main', main.MainController.getMain)
export const getMainId = app.get('/main/id', main.MainController.getMainId)

//* Post
export const postMain = app.post('/main', [middleware.multer.MainUploads, middleware.auth.adminAuth], main.MainController.createMain)

//? Update
export const putMain = app.put('/main', [middleware.multer.MainUploads, middleware.auth.adminAuth], main.MainController.updateMain)

//! Delete
export const deleteMain = app.delete('/main', middleware.auth.adminAuth, main.MainController.deleteMain)