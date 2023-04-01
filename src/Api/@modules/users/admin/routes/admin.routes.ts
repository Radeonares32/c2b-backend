import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { admin } from '../controllers/controllers'

//? Get
export const getAdmin = app.get('/', admin.AdminController.getAdmin)
export const getAdminId = app.get('/id', admin.AdminController.getAdminId)

//* Post
export const postAdmin = app.post('/create', admin.AdminController.createAdmin)
export const signAdmin = app.post('/sign', admin.AdminController.signAdmin)
export const logoutAdmin = app.post('/logout', admin.AdminController.logoutAdmin)

//? Update
export const putAdmin = app.put('/update', admin.AdminController.updateAdmin)

//! Delete
export const deleteAdmin = app.delete('/delete', admin.AdminController.deleteAdmin)