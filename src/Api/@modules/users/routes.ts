import express from 'express'
const app = express.Router()

//! Admin routes
import { adminRoutes } from './admin/routes'
import { userRoutes } from './user/routes'
import { institutionalRoutes } from './institutional/routes'

export const  userRoute = app.use('/api/users', userRoutes,adminRoutes,institutionalRoutes)