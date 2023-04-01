import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { notification } from '../controllers/controllers'

//? Get
export const getNotification = app.get('/notification', notification.NotificationController.getNotification)
export const getNotificationId = app.get('/notification/id', notification.NotificationController.getNotificationId)

//* Post
export const postNotification = app.post('/notification', middleware.auth.adminAuth, notification.NotificationController.createNotification)

//? Update
export const putNotification = app.put('/notification', middleware.auth.adminAuth, notification.NotificationController.updateNotification)

//! Delete
export const deleteNotification = app.delete('/notification', middleware.auth.adminAuth, notification.NotificationController.deleteNotification)