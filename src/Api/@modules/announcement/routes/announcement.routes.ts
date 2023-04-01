import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { announcement } from '../controllers/controllers'

//? Get
export const getAnnouncement = app.get('/announcement', announcement.AnnouncementController.getAnnouncement)
export const getAnnouncementId = app.get('/announcement/id', announcement.AnnouncementController.getAnnouncementId)

//* Post
export const postAnnouncement = app.post('/announcement', [middleware.multer.announcementUploads, middleware.auth.adminAuth], announcement.AnnouncementController.createAnnouncement)

//? Update
export const putAnnouncement = app.put('/announcement', [middleware.multer.announcementUploads, middleware.auth.adminAuth], announcement.AnnouncementController.updateAnnouncement)

//! Delete
export const deleteAnnouncement = app.delete('/announcement', middleware.auth.adminAuth, announcement.AnnouncementController.deleteAnnouncement)