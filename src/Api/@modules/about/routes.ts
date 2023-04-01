import express from 'express'
const app = express()

//! About routes
import { getAbout,postAbout,putAbout,deleteAbout,getAboutId } from './routes/about.routes'

export const  aboutRoutes = app.use('/api', getAbout,postAbout,putAbout,deleteAbout,getAboutId)