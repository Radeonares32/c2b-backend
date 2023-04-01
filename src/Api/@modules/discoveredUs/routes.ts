import express from 'express'
const app = express()

//! DiscoveredUs routes
import { deleteDiscoveredUs,getDiscoveredUs,getDiscoveredUsId,postDiscoveredUs,putDiscoveredUs } from './routes/discoveredUs.routes'

export const DiscoveredUsRoutes = app.use('/api', deleteDiscoveredUs, getDiscoveredUs, getDiscoveredUsId, postDiscoveredUs, putDiscoveredUs)