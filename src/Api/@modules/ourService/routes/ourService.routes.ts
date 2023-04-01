import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { ourService } from '../controllers/controllers'

//? Get
export const getOurService = app.get('/ourService', ourService.OurServiceController.getOurService)
export const getOurServiceId = app.get('/ourService/id', ourService.OurServiceController.getOurServiceId)

//* Post
export const postOurService = app.post('/ourService', middleware.auth.adminAuth, ourService.OurServiceController.createOurService)

//? Update
export const putOurService = app.put('/ourService', middleware.auth.adminAuth, ourService.OurServiceController.updateOurService)

//! Delete
export const deleteOurService = app.delete('/ourService', middleware.auth.adminAuth, ourService.OurServiceController.deleteOurService)