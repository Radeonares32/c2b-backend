import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { solutionMain } from '../controllers/controllers'

//? Get
export const getSolutionMain = app.get('/solutionMain', solutionMain.SolutionMainController.getSolutionMain)
export const getSolutionMainId = app.get('/solutionMain/id', solutionMain.SolutionMainController.getSolutionMainId)

//* Post
export const postSolutionMain = app.post('/solutionMain', [middleware.multer.solutionMainUploads, middleware.auth.adminAuth], solutionMain.SolutionMainController.createSolutionMain)

//? Update
export const putSolutionMain = app.put('/solutionMain', [middleware.multer.solutionMainUploads, middleware.auth.adminAuth], solutionMain.SolutionMainController.updateSolutionMain)

//! Delete
export const deleteSolutionMain = app.delete('/solutionMain', middleware.auth.adminAuth, solutionMain.SolutionMainController.deleteSolutionMain)