import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { ourCollabrotion } from '../controllers/controllers'

//? Get
export const getOurCollabrotion = app.get('/ourCollabrotion', ourCollabrotion.OurCollabrotionController.getOurCollabrotion)
export const getOurCollabrotionId = app.get('/ourCollabrotion/id', ourCollabrotion.OurCollabrotionController.getOurCollabrotionId)

//* Post
export const postOurCollabrotion = app.post('/ourCollabrotion', [middleware.multer.OurCollabrotionUploads, middleware.auth.adminAuth], ourCollabrotion.OurCollabrotionController.createOurCollabrotion)

//? Update
export const putOurCollabrotion= app.put('/ourCollabrotion', [middleware.multer.OurCollabrotionUploads, middleware.auth.adminAuth], ourCollabrotion.OurCollabrotionController.updateOurCollabrotion)

//! Delete
export const deleteOurCollabrotion = app.delete('/ourCollabrotion', middleware.auth.adminAuth, ourCollabrotion.OurCollabrotionController.deleteOurCollabrotion)