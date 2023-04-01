import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { contactForm } from '../controllers/controllers'

//? Get
export const getContactForm= app.get('/contactForm', contactForm.ContactFormController.getContactForm)
export const getContactFormId = app.get('/contactForm/id', contactForm.ContactFormController.getContactFormId)

//* Post
export const postContactForm = app.post('/contactForm', middleware.auth.adminAuth, contactForm.ContactFormController.createContactForm)

//? Update
export const putContactForm = app.put('/contactForm', middleware.auth.adminAuth, contactForm.ContactFormController.updateContactForm)

//! Delete
export const deleteContactForm = app.delete('/contactForm', middleware.auth.adminAuth, contactForm.ContactFormController.deleteContactForm)