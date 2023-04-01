import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { product } from '../controllers/controllers'

//? Get
export const getProduct = app.get('/', product.ProductController.getProduct)
export const getProductId = app.get('/id', product.ProductController.getProductId)

//* Post
export const postProduct = app.post('/create', [middleware.multer.productMultiUploads, middleware.auth.adminAuth], product.ProductController.createProduct)

//? Update
export const putProduct = app.put('/update', [middleware.multer.productMultiUploads, middleware.auth.adminAuth], product.ProductController.updateProduct)

//! Delete
export const deleteProduct = app.delete('/delete', middleware.auth.adminAuth, product.ProductController.deleteProduct)