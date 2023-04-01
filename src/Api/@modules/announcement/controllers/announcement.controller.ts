import { Handler } from 'express'
//! Service
import { AnnouncementService } from '../services/announcement.service'

export class AnnouncementController {
    static getAnnouncement: Handler = async (req, res) => {
        const announcement = await new AnnouncementService().announcementFindAll()
        res.json({ announcement })
    }
    static getAnnouncementId: Handler = async (req, res) => {
        const { id } = req.body
        const announcement = new AnnouncementService().announcementFind(id)
        res.json({ announcement: await announcement.announcement })
    }
    static createAnnouncement: Handler = async (req, res) => {
        const announcementService = new AnnouncementService()
        const { title } = req.body
        const { image } = req.files as any
        const announcement = await announcementService.announcementCreate(title, image[0].path)
        if (announcement.message) {
            res.json({
                error: announcement.message
            })
        }
        else {
            res.json({
                message: await announcement.create
            })
        }
    }
    static updateAnnouncement: Handler = async (req, res) => {
        const announcementService = new AnnouncementService()
        const { id, title } = req.body
        const { image } = req.files as any
        const announcement = announcementService.announcementUpdate(id, title, image[0].path,)
        if (announcement.message) {
            res.json({
                error: announcement.message
            })
        }
        else {
            res.json({
                message: await announcement.update
            })
        }
    }
    static deleteAnnouncement: Handler = async (req, res) => {
        const announcementService = new AnnouncementService()
        const { id } = req.body
        const announcement = announcementService.announcementDelete(id)
        if (announcement.message) {
            res.json({
                error: announcement.message
            })
        }
        else {
            res.json({
                message: await announcement.delete
            })
        }
    }
}
