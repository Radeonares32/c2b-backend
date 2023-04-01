import express from 'express'
const app = express.Router()

//! Category routes
import { categoryRoutes } from './category/routes'
import { projectConsultantRoutes } from './projectConsultant/routes'

export const projectConsultantRoute = app.use('/api/project-consultant',categoryRoutes,projectConsultantRoutes)