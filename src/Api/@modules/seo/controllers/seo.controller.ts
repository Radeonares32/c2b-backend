import { Handler } from 'express'
//! Service
import { SeoService } from '../services/seo.service'

export class SeoController {
    static getSeo: Handler = async (req, res) => {
        const seo = await new SeoService().seoFindAll()
        res.json({ seo })
    }
    static getSeoId: Handler = async (req, res) => {
        const { id } = req.body
        const seo = new SeoService().seoFind(id)
        res.json({ seo: await seo.seo })
    }
    static createSeo: Handler = async (req, res) => {
        const seoService = new SeoService()
        const { title, description, keywords } = req.body
        const seo = await seoService.seoCreate(title, description, keywords)
        if (seo.message) {
            res.json({
                error: seo.message
            })
        }
        else {
            res.json({
                message: await seo.create
            })
        }
    }
    static updateSeo: Handler = async (req, res) => {
        const seoService = new SeoService()
        const { id, title, description, keywords } = req.body
        const seo = seoService.seoUpdate(id, title, description, keywords)
        if (seo.message) {
            res.json({
                error: seo.message
            })
        }
        else {
            res.json({
                message: await seo.update
            })
        }
    }
    static deleteSeo: Handler = async (req, res) => {
        const seoService = new SeoService()
        const { id } = req.body
        const seo = seoService.seoDelete(id)
        if (seo.message) {
            res.json({
                error: seo.message
            })
        }
        else {
            res.json({
                message: await seo.delete
            })
        }
    }
}
