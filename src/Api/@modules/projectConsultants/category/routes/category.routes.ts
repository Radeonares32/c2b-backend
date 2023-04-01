import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { category } from '../controllers/controllers'

//? Get
export const getCategory = app.get('/', category.CategoryController.getCategory)
export const getCategoryId = app.get('/id', category.CategoryController.getCategoryId)

//* Post
export const postCategory = app.post('/create', middleware.auth.adminAuth, category.CategoryController.createCategory)

//? Update
export const putCategory = app.put('/update', middleware.auth.adminAuth, category.CategoryController.updateCategory)

//! Delete
export const deleteCategory = app.delete('/delete', middleware.auth.adminAuth, category.CategoryController.deleteCategory)