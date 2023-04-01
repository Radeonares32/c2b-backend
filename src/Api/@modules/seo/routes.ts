import express from 'express'
const app = express()

//! Seo routes
import { deleteSeo, getSeo, getSeoId, postSeo, putSeo } from './routes/seo.routes'

export const seoRoutes = app.use('/api', deleteSeo, getSeo, getSeoId, postSeo, putSeo)