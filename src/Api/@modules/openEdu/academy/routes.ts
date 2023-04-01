import express from 'express'
const app = express()

//! Academy routes
import { deleteAcademy, getAcademy, getAcademyId, postAcademy, putAcademy } from './routes/academy.routes'

export const AcademyRoutes = app.use('/api', deleteAcademy, getAcademy, getAcademyId, postAcademy, putAcademy)