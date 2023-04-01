import { Handler } from 'express'
//! Service
import { NotificationService } from '../services/notification.service'

export class NotificationController {
    static getNotification: Handler = async (_req, res) => {
        const notificationService = await new NotificationService().notificationFindAll()
        res.json({ notificationService })
    }
    static getNotificationId: Handler = async (req, res) => {
        const { id } = req.body
        const notificationService = new NotificationService().notificationFind(id)
        res.json({ notification: await notificationService.notification })
    }
    static createNotification: Handler = async (req, res) => {
        const notificationService = new NotificationService()
        const { title, context } = req.body
        const notification = await notificationService.notificationCreate(title, context)
        if (notification.message) {
            res.json({
                error: notification.message
            })
        }
        else {
            res.json({
                message: await notification.create
            })
        }

    }
    static updateNotification: Handler = async (req, res) => {
        const notificationService = new NotificationService()
        const { id, title, context } = req.body
        const notification = notificationService.notificationUpdate(id, title, context)
        if (notification.message) {
            res.json({
                error: notification.message
            })
        }
        else {
            res.json({
                message: await notification.update
            })
        }

    }
    static deleteNotification: Handler = async (req, res) => {
        const notificationService = new NotificationService()
        const { id } = req.body
        const notification = notificationService.notificationDelete(id)
        if (notification.message) {
            res.json({
                error: notification.message
            })
        }
        else {
            res.json({
                message: await notification.delete
            })
        }
    }
}
