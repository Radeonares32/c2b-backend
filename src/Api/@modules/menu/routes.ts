import express from 'express'
const app = express()

//! Menu routes
import { deleteMenu, getMenu, getMenuId, postMenu, putMenu } from './routes/menu.routes'

export const menuRoutes = app.use('/api', deleteMenu, getMenu, getMenuId, postMenu, putMenu)