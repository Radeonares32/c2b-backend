import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { blogMain } from '../controllers/controllers'

//? Get
export const getBlogMain = app.get('/blogMain', blogMain.BlogMainController.getBlogMain)
export const getBlogMainId = app.get('/blogMain/id', blogMain.BlogMainController.getBlogMainId)

//* Post
export const postBlogMain = app.post('/blogMain', [middleware.multer.BlogMainUploads, middleware.auth.adminAuth], blogMain.BlogMainController.createBlogMain)

//? Update
export const putBlogMain = app.put('/blogMain', [middleware.multer.BlogMainUploads, middleware.auth.adminAuth], blogMain.BlogMainController.updateBlogMain)

//! Delete
export const deleteBlogMain = app.delete('/blogMain', middleware.auth.adminAuth, blogMain.BlogMainController.deleteBlogMain)