import { Handler } from 'express'
//! Service
import { Privacy } from '../services/privacy.service'

export class PrivacyController {
    static getPrivacy: Handler = async (req, res) => {
        const privacy = await new Privacy().privacyFindAll()
        res.json({ privacy })
    }
    static getPrivacyId: Handler = async (req, res) => {
        const { id } = req.body
        const privacy = new Privacy().privacyFind(id)
        res.json({ privacy: await privacy.privacy })
    }
    static createPrivacy: Handler = async (req, res) => {
        const { title,context } = req.body
        const privacyService = new Privacy()


        const privacy = await privacyService.privacyCreate(title,context)
        if (privacy.message) {
            res.json({
                error: privacy.message
            })
        }
        else {
            res.json({
                message: await privacy.create
            })
        }

    }
    static updatePrivacy: Handler = async (req, res) => {
        const privacyService = new Privacy()
        const { id, title,context } = req.body


        const privacy = privacyService.privacyUpdate(id, title,context)
        if (privacy.message) {
            res.json({
                error: privacy.message
            })
        }
        else {
            res.json({
                message: await privacy.update
            })
        }

    }
    static deletePrivacy: Handler = async (req, res) => {
        const privacyService = new Privacy()
        const { id } = req.body
        const privacy = privacyService.privacyDelete(id)
        if (privacy.message) {
            res.json({
                error: privacy.message
            })
        }
        else {
            res.json({
                message: await privacy.delete
            })
        }

    }
}
