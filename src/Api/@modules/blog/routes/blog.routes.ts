import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { blog } from '../controllers/controllers'

//? Get
export const getBlog = app.get('/blog', blog.BlogController.getBlog)
export const getBlogId = app.get('/blog/id', blog.BlogController.getBlogId)

//* Post
export const postBlog = app.post('/blog', [middleware.multer.BlogUploads, middleware.auth.adminAuth], blog.BlogController.createBlog)

//? Update
export const putBlog= app.put('/blog', [middleware.multer.BlogUploads, middleware.auth.adminAuth], blog.BlogController.updateBlog)

//! Delete
export const deleteBlog = app.delete('/blog', middleware.auth.adminAuth, blog.BlogController.deleteBlog)