import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { categoryMain } from '../controllers/controllers'

//? Get
export const getCategoryMain = app.get('/', categoryMain.CategoryMainController.getCategoryMain)
export const getCategoryMainId = app.get('/id', categoryMain.CategoryMainController.getCategoryMainId)

//* Post
export const postCategoryMain = app.post('/create', middleware.auth.adminAuth, categoryMain.CategoryMainController.createCategoryMain)

//? Update
export const putCategoryMain = app.put('/update', middleware.auth.adminAuth, categoryMain.CategoryMainController.updateCategoryMain)

//! Delete
export const deleteCategoryMain = app.delete('/delete', middleware.auth.adminAuth, categoryMain.CategoryMainController.deleteCategoryMain)