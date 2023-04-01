import { Handler } from 'express'
//! Service
import { SolutionMainService } from '../services/solutionMain.service'

export class SolutionMainController {
    static getSolutionMain: Handler = async (req, res) => {
        const solutionMain = await new SolutionMainService().solutionMainFindAll()
        res.json({ solutionMain })
    }
    static getSolutionMainId: Handler = async (req, res) => {
        const { id } = req.body
        const solutionMain = new SolutionMainService().solutionMainFind(id)
        res.json({ solutionMain: await solutionMain.solutionMain })
    }
    static createSolutionMain: Handler = async (req, res) => {

        const solutionMainService = new SolutionMainService()
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { html, title, description, text, context, questions } = req.body
        const { image, icon, pageImage } = req.files as any | any[]
        icons.push({ src: icon[0].path, context })
        icons.shift()

        if (html.Error) {
            res.json({
                error: html.Error
            })
        }
        else {
            const solutionMain = await solutionMainService.solutionMainCreate(image[0].path, pageImage[0].path, title, text, description, html, icons, questions)
            if (solutionMain.message) {
                res.json({
                    error: solutionMain.message
                })
            }
            else {
                res.json({
                    message: await solutionMain.create
                })
            }
        }
    }
    static updateSolutionMain: Handler = async (req, res) => {
        const solutionMainService = new SolutionMainService()
        const { id, html, title, description, text, context, questions } = req.body
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { image, icon, pageImage } = req.files as any | any[]

        icons.push({ src: icon[0].path, context })
        icons.shift()
        if (html.Error) {
            res.json({
                error: html.Error
            })
        }
        else {
            const solutionMain = solutionMainService.solutionMainUpdate(id, image[0].path, pageImage[0].path, title, text, description, html, icons, questions)
            if (solutionMain.message) {
                res.json({
                    error: solutionMain.message
                })
            }
            else {
                res.json({
                    message: await solutionMain.update
                })
            }
        }
    }
    static deleteSolutionMain: Handler = async (req, res) => {
        const solutionMainService = new SolutionMainService()
        const { id } = req.body
        const solutionMain = solutionMainService.solutionMainDelete(id)
        if (solutionMain.message) {
            res.json({
                error: solutionMain.message
            })
        }
        else {
            res.json({
                message: await solutionMain.delete
            })
        }

    }
}
