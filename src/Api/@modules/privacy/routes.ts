import express from 'express'
const app = express()

//! Privacy routes
import { deletePrivacy,getPrivacy,getPrivacyId,postPrivacy,putPrivacy } from './routes/privacy.routes'

export const  privacyRoutes = app.use('/api', deletePrivacy,getPrivacy,getPrivacyId,postPrivacy,putPrivacy)