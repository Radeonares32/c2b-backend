import express from 'express'
const app = express()

//! OpenEdu routes
import { deleteOpenEdu, getOpenEdu, getOpenEduId, postOpenEdu, putOpenEdu } from './routes/openEdu.routes'

export const OpenEduRoutes = app.use('/openEdu', deleteOpenEdu, getOpenEdu, getOpenEduId, postOpenEdu, putOpenEdu)