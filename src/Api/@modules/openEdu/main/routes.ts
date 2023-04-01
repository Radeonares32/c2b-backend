import express from 'express'
const app = express()

//! Main routes
import { deleteMain, getMain, getMainId, postMain, putMain } from './routes/main.routes'

export const MainRoutes = app.use('/api', deleteMain, getMain, getMainId, postMain, putMain)