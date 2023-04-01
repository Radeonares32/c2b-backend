import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { projectConsultant } from '../controllers/controllers'

//? Get
export const getProjectConsultant = app.get('/', projectConsultant.ProjectConsultantController.getProject)
export const getProjectConsultantId = app.get('/id', projectConsultant.ProjectConsultantController.getProjectId)

//* Post
export const postProjectConsultant = app.post('/create', [middleware.multer.projectConsultantUploads, middleware.auth.adminAuth],projectConsultant.ProjectConsultantController.createProject)

//? Update
export const putProjectConsultant = app.put('/update', [middleware.multer.projectConsultantUploads, middleware.auth.adminAuth], projectConsultant.ProjectConsultantController.updateProject)

//! Delete
export const deleteProjectConsultant = app.delete('/delete', middleware.auth.adminAuth, projectConsultant.ProjectConsultantController.deleteProject)