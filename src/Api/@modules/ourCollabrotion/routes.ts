import express from 'express'
const app = express()

//! ourCollabrotion routes
import { deleteOurCollabrotion,getOurCollabrotion,getOurCollabrotionId,postOurCollabrotion,putOurCollabrotion } from './routes/ourCollabrotion.routes'

export const  ourCollabrotionRoutes = app.use('/api', deleteOurCollabrotion,getOurCollabrotion,getOurCollabrotionId,postOurCollabrotion,putOurCollabrotion)