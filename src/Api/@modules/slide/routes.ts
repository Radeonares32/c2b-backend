import express from 'express'
const app = express()

//! slide routes
import { deleteSlide,getSlide,getSlideId,postSlide,putSlide } from './routes/slide.routes'

export const  slideRoutes = app.use('/api',deleteSlide,getSlide,getSlideId,postSlide,putSlide )