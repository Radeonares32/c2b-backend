import express from 'express'
const app = express()

//! BlogMain routes
import { deleteBlogMain,getBlogMain,getBlogMainId,postBlogMain,putBlogMain } from './routes/blogMain.routes'

export const  blogMainRoutes = app.use('/api', deleteBlogMain,getBlogMain,getBlogMainId,postBlogMain,putBlogMain)