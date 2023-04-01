import { Handler } from 'express'
//! Service
import { OpenEduService } from '../services/openEdu.service'

export class OpenEduController {
    static getOpenEdu: Handler = async (req, res) => {
        const openEdu = await new OpenEduService().openEduFindAll()
        res.json({ openEdu })
    }
    static getOpenEduId: Handler = async (req, res) => {
        const { id } = req.body
        const openEdu = new OpenEduService().openEduFind(id)
        res.json({ openEdu: await openEdu.openEdu })
    }
    static createOpenEdu: Handler = async (req, res) => {
        const openEduService = new OpenEduService()
        const { name, description, html, date, status, category } = req.body
        const { image } = req.files as any | any[]

        const openEdu = await openEduService.openEduCreate(name, description, image[0].path, html, date, status, category)
        if (openEdu.message) {
            res.json({
                error: openEdu.message
            })
        }
        else {
            res.json({
                message: await openEdu.create
            })
        }
    }
    static updateOpenEdu: Handler = async (req, res) => {
        const openEduService = new OpenEduService()
        const { id, name, description, html, date, status, category } = req.body
        const { image } = req.files as any | any[]

        const openEdu = openEduService.openEduUpdate(id, name, description, image[0].path, html, date, status, category)
        if (openEdu.message) {
            res.json({
                error: openEdu.message
            })
        }
        else {
            res.json({
                message: await openEdu.update
            })
        }

    }
    static deleteOpenEdu: Handler = async (req, res) => {
        const openEduService = new OpenEduService()
        const { id } = req.body
        const openEdu = openEduService.openEduDelete(id)
        if (openEdu.message) {
            res.json({
                error: openEdu.message
            })
        }
        else {
            res.json({
                message: await openEdu.delete
            })
        }

    }
}
