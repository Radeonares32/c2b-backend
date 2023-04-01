import { Handler } from 'express'
//! Service
import { OurService } from '../services/ourService.service'

export class OurServiceController {
    static getOurService: Handler = async (req, res) => {
        const ourService = await new OurService().ourServiceFindAll()
        res.json({ ourService })
    }
    static getOurServiceId: Handler = async (req, res) => {
        const { id } = req.body
        const ourService = new OurService().ourServiceFind(id)
        res.json({ ourService: await ourService.ourService })
    }
    static createOurService: Handler = async (req, res) => {
        const { link, text, title } = req.body
        const ourServices = new OurService()


        const ourService = await ourServices.ourServiceCreate(link, text, title)
        if (ourService.message) {
            res.json({
                error: ourService.message
            })
        }
        else {
            res.json({
                message: await ourService.create
            })
        }

    }
    static updateOurService: Handler = async (req, res) => {
        const ourServices = new OurService()
        const { id, link, text, title } = req.body


        const ourService = ourServices.ourServiceUpdate(id, link, text, title)
        if (ourService.message) {
            res.json({
                error: ourService.message
            })
        }
        else {
            res.json({
                message: await ourService.update
            })
        }

    }
    static deleteOurService: Handler = async (req, res) => {
        const ourServices = new OurService()
        const { id } = req.body
        const ourService = ourServices.ourServiceDelete(id)
        if (ourService.message) {
            res.json({
                error: ourService.message
            })
        }
        else {
            res.json({
                message: await ourService.delete
            })
        }

    }
}
