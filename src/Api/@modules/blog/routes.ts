import express from 'express'
const app = express()

//! Blog routes
import { getBlog,deleteBlog,getBlogId,postBlog,putBlog } from './routes/blog.routes'

export const  blogRoutes = app.use('/api', getBlog,deleteBlog,getBlogId,postBlog,putBlog)