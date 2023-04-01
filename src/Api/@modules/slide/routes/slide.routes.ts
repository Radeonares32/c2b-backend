import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { slide } from '../controllers/controllers'

//? Get
export const getSlide = app.get('/slide', slide.SlideController.getSlide)
export const getSlideId = app.get('/slide/id', slide.SlideController.getSlideId)

//* Post
export const postSlide = app.post('/slide', [middleware.multer.SlideUploads, middleware.auth.adminAuth], slide.SlideController.createSlide)

//? Update
export const putSlide= app.put('/slide', [middleware.multer.SlideUploads, middleware.auth.adminAuth], slide.SlideController.updateSlide)

//! Delete
export const deleteSlide = app.delete('/slide', middleware.auth.adminAuth, slide.SlideController.deleteSlide)