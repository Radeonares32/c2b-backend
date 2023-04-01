import { Handler } from 'express'
//! Service
import { AboutMainService } from '../services/aboutMain.service'

export class AboutMainController {
    static getAboutMain: Handler = async (req, res) => {
        const aboutMain = await new AboutMainService().aboutMainFindAll()
        res.json({ aboutMain })
    }
    static getAboutMainId: Handler = async (req, res) => {
        const { id } = req.body
        const aboutMain = new AboutMainService().aboutMainFind(id)
        res.json({ about: await aboutMain.about })
    }
    static createAboutMain: Handler = async (req, res) => {

        const aboutMainService = new AboutMainService()
        const { html, title } = req.body

        const { image } = req.files as any | any[]


        if (html.Error) {
            res.json({
                error: html.Error
            })
        }
        else {
            const aboutMain = await aboutMainService.aboutMainCreate(title, html, image[0].path)
            if (aboutMain.message) {
                res.json({
                    error: aboutMain.message
                })
            }
            else {
                res.json({
                    message: await aboutMain.create
                })
            }
        }
    }
    static updateAboutMain: Handler = async (req, res) => {
        const aboutMainService = new AboutMainService()
        const { id, html, title } = req.body
        const { image } = req.files as any | any[]
        if (html.Error) {
            res.json({
                error: html.Error
            })
        }
        else {
            const aboutMain = aboutMainService.aboutMainUpdate(id, title, html, image[0].path)
            if (aboutMain.message) {
                res.json({
                    error: aboutMain.message
                })
            }
            else {
                res.json({
                    message: await aboutMain.update
                })
            }
        }
    }
    static deleteAboutMain: Handler = async (req, res) => {
        const aboutMainService = new AboutMainService()
        const { id } = req.body
        const aboutMain = aboutMainService.aboutMainDelete(id)
        if (aboutMain.message) {
            res.json({
                error: aboutMain.message
            })
        }
        else {
            res.json({
                message: await aboutMain.delete
            })
        }
    }
}
