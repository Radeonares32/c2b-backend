import express from 'express'
const app = express.Router()

//! CategoryMain routes
import { categoryMainRoutes } from './categoryMain/routes'
import { categoryRoutes } from './category/routes'
import { productRoutes } from './product/routes'

export const productsRoute = app.use('/api/products', categoryMainRoutes,categoryRoutes,productRoutes)