import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { menu } from '../controllers/controllers'

//? Get
export const getMenu = app.get('/menu', menu.MenuController.getMenu)
export const getMenuId = app.get('/menu/id', menu.MenuController.getMenuId)

//* Post
export const postMenu = app.post('/menu', middleware.auth.adminAuth, menu.MenuController.createMenu)

//? Update
export const putMenu = app.put('/menu', middleware.auth.adminAuth, menu.MenuController.updateMenu)

//! Delete
export const deleteMenu = app.delete('/menu', middleware.auth.adminAuth, menu.MenuController.deleteMenu)