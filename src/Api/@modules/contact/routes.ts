import express from 'express'
const app = express()

//! Contact routes
import { deleteContact,getContact,getContactId,postContact,putContact} from './routes/contact.routes'

export const contactRoutes = app.use('/api', deleteContact,getContact,getContactId,postContact,putContact)