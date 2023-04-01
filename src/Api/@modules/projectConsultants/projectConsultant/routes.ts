import express from 'express'
const app = express()

//! Project Consultant routes
import { deleteProjectConsultant,getProjectConsultant,getProjectConsultantId,postProjectConsultant,putProjectConsultant } from './routes/projectConsultant.routes'

export const projectConsultantRoutes = app.use('/project', deleteProjectConsultant,getProjectConsultant,getProjectConsultantId,postProjectConsultant,putProjectConsultant)