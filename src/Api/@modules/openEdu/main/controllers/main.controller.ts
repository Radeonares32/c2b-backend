import { Handler } from 'express'
//! Service
import { MainService } from '../services/main.service'

export class MainController {
    static getMain: Handler = async (req, res) => {
        const Main = await new MainService().MainFindAll()
        res.json({ Main })
    }
    static getMainId: Handler = async (req, res) => {
        const { id } = req.body
        const main = new MainService().MainFind(id)
        res.json({ Main: await main.main })
    }
    static createMain: Handler = async (req, res) => {

        const mainService = new MainService()
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { context } = req.body
        const { icon } = req.files as any | any[]
        icons.push({ src: icon[0].path, context })
        icons.shift()
        const main = await mainService.MainCreate(icons)
        if (main.message) {
            res.json({
                error: main.message
            })
        }
        else {
            res.json({
                message: await main.create
            })
        }

    }
    static updateMain: Handler = async (req, res) => {
        const mainService = new MainService()
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { id, context } = req.body
        const { icon } = req.files as any | any[]

        icons.push({ src: icon[0].path, context })
        icons.shift()
        const main = mainService.MainUpdate(id, icons)
        if (main.message) {
            res.json({
                error: main.message
            })
        }
        else {
            res.json({
                message: await main.update
            })
        }

    }
    static deleteMain: Handler = async (req, res) => {
        const mainService = new MainService()
        const { id } = req.body
        const main = mainService.MainDelete(id)
        if (main.message) {
            res.json({
                error: main.message
            })
        }
        else {
            res.json({
                message: await main.delete
            })
        }

    }
}
