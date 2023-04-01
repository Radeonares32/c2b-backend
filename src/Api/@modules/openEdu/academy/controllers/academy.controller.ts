import { Handler } from 'express'
//! Service
import { AcademyService } from '../services/academy.service'

export class AcademyController {
    static getAcademy: Handler = async (req, res) => {
        const Academy = await new AcademyService().AcademyFindAll()
        res.json({ Academy })
    }
    static getAcademyId: Handler = async (req, res) => {
        const { id } = req.body
        const Academy = new AcademyService().AcademyFind(id)
        res.json({ Academy: await Academy.academy })
    }
    static createAcademy: Handler = async (req, res) => {

        const academyService = new AcademyService()
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { context } = req.body
        const { icon } = req.files as any | any[]
        icons.push({ src: icon[0].path, context })
        icons.shift()
        const academy = await academyService.AcademyCreate(icons)
        if (academy.message) {
            res.json({
                error: academy.message
            })
        }
        else {
            res.json({
                message: await academy.create
            })
        }

    }
    static updateAcademy: Handler = async (req, res) => {
        const academyService = new AcademyService()
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { id, context } = req.body
        const { icon } = req.files as any | any[]

        icons.push({ src: icon[0].path, context })
        icons.shift()
        const academy = academyService.AcademyUpdate(id, icons)
        if (academy.message) {
            res.json({
                error: academy.message
            })
        }
        else {
            res.json({
                message: await academy.update
            })
        }

    }
    static deleteAcademy: Handler = async (req, res) => {
        const academyService = new AcademyService()
        const { id } = req.body
        const academy = academyService.AcademyDelete(id)
        if (academy.message) {
            res.json({
                error: academy.message
            })
        }
        else {
            res.json({
                message: await academy.delete
            })
        }

    }
}
