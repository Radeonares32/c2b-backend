import express from 'express'
const app = express()

//! Product routes
import { deleteProduct,getProduct,getProductId,postProduct,putProduct } from './routes/product.routes'

export const productRoutes = app.use('/product', getProduct, getProductId, postProduct, putProduct, deleteProduct)