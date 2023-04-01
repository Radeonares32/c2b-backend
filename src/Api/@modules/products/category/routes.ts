import express from 'express'
const app = express()

//! About routes
import { deleteCategory, getCategory, getCategoryId, postCategory, putCategory } from './routes/category.routes'

export const categoryRoutes = app.use('/category', getCategory, getCategoryId, postCategory, putCategory, deleteCategory)