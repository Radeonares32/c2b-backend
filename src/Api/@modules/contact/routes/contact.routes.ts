import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { contact } from '../controllers/controllers'

//? Get
export const getContact = app.get('/contact', contact.ContactController.getContact)
export const getContactId = app.get('/contact/id', contact.ContactController.getMenuId)

//* Post
export const postContact = app.post('/contact', middleware.auth.adminAuth, contact.ContactController.createContact)

//? Update
export const putContact = app.put('/contact', middleware.auth.adminAuth, contact.ContactController.updateContact)

//! Delete
export const deleteContact = app.delete('/contact', middleware.auth.adminAuth, contact.ContactController.deleteContact)