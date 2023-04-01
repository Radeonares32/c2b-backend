import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { academy } from '../controllers/controllers'

//? Get
export const getAcademy = app.get('/academy', academy.AcademyController.getAcademy)
export const getAcademyId = app.get('/academy/id', academy.AcademyController.getAcademyId)

//* Post
export const postAcademy = app.post('/academy', [middleware.multer.AcademyUploads, middleware.auth.adminAuth], academy.AcademyController.createAcademy)

//? Update
export const putAcademy = app.put('/academy', [middleware.multer.AcademyUploads, middleware.auth.adminAuth], academy.AcademyController.updateAcademy)

//! Delete
export const deleteAcademy = app.delete('/academy', middleware.auth.adminAuth, academy.AcademyController.deleteAcademy)