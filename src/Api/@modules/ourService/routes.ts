import express from 'express'
const app = express()

//! OurService routes
import { deleteOurService,getOurService,getOurServiceId,postOurService,putOurService } from './routes/ourService.routes'

export const  ourServiceRoutes = app.use('/api', deleteOurService,getOurService,getOurServiceId,postOurService,putOurService)