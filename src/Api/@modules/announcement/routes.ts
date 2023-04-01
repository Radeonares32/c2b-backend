import express from 'express'
const app = express()

//! Announcement routes
import { deleteAnnouncement, getAnnouncement, getAnnouncementId, postAnnouncement, putAnnouncement } from './routes/announcement.routes'

export const announcementRoutes = app.use('/api', deleteAnnouncement, getAnnouncement, getAnnouncementId, postAnnouncement, putAnnouncement)