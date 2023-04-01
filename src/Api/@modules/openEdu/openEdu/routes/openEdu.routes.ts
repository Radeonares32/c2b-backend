import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { openEdu } from '../controllers/controllers'

//? Get
export const getOpenEdu = app.get('/', openEdu.OpenEduController.getOpenEdu)
export const getOpenEduId = app.get('/id', openEdu.OpenEduController.getOpenEduId)

//* Post
export const postOpenEdu = app.post('/create', [middleware.multer.OpenEduUploads, middleware.auth.adminAuth], openEdu.OpenEduController.createOpenEdu)

//? Update
export const putOpenEdu = app.put('/update', [middleware.multer.OpenEduUploads, middleware.auth.adminAuth], openEdu.OpenEduController.updateOpenEdu)

//! Delete
export const deleteOpenEdu = app.delete('/delete', middleware.auth.adminAuth, openEdu.OpenEduController.deleteOpenEdu)