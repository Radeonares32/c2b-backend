import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { discoveredUs } from '../controllers/controllers'

//? Get
export const getDiscoveredUs= app.get('/discoveredUs', discoveredUs.DiscoveredUsController.getDiscoveredUs)
export const getDiscoveredUsId = app.get('/discoveredUs/id', discoveredUs.DiscoveredUsController.getDiscoveredUsId)

//* Post
export const postDiscoveredUs = app.post('/discoveredUs', middleware.auth.adminAuth, discoveredUs.DiscoveredUsController.createDiscoveredUs)

//? Update
export const putDiscoveredUs = app.put('/discoveredUs', middleware.auth.adminAuth, discoveredUs.DiscoveredUsController.updateDiscoveredUs)

//! Delete
export const deleteDiscoveredUs = app.delete('/discoveredUs', middleware.auth.adminAuth, discoveredUs.DiscoveredUsController.deleteDiscoveredUs)