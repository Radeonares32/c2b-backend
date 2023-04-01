import express from 'express'
const app = express()

//! About routes
import { deleteAboutMain,getAboutMain,getAboutMainId,postAboutMain,putAboutMain } from './routes/aboutMain.routes'

export const  aboutMainRoutes = app.use('/api', getAboutMain,getAboutMainId,postAboutMain,putAboutMain,deleteAboutMain)