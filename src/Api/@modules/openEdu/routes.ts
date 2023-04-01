import express from 'express'
const app = express.Router()

//! OpenEdu routes

import { categoryRoutes } from './category/routes'
import { OpenEduRoutes } from './openEdu/routes'

export const OpenEduRoute = app.use('/api/openEdu', categoryRoutes,OpenEduRoutes)