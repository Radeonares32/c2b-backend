import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { seo } from '../controllers/controllers'

//? Get
export const getSeo = app.get('/seo', seo.SeoController.getSeo)
export const getSeoId = app.get('/seo/id', seo.SeoController.getSeoId)

//* Post
export const postSeo = app.post('/seo', middleware.auth.adminAuth, seo.SeoController.createSeo)

//? Update
export const putSeo = app.put('/seo', middleware.auth.adminAuth, seo.SeoController.updateSeo)

//! Delete
export const deleteSeo = app.delete('/seo', middleware.auth.adminAuth, seo.SeoController.deleteSeo)