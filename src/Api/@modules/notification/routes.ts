import express from 'express'
const app = express()

//! Notification routes
import { deleteNotification,getNotification,getNotificationId,postNotification,putNotification } from './routes/notification.routes'

export const notificationRoutes = app.use('/api', deleteNotification, getNotification, getNotificationId, postNotification, putNotification)