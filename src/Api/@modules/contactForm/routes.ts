import express from 'express'
const app = express()

//! ContactForm routes
import { deleteContactForm,getContactForm,getContactFormId,postContactForm,putContactForm } from './routes/contactForm.routes'

export const ContactFormRoutes = app.use('/api', deleteContactForm, getContactForm, getContactFormId, postContactForm, putContactForm)