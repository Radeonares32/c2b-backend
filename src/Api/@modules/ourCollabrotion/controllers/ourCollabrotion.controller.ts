import { Handler } from 'express'
//! Service
import { OurCollabrotionService } from '../services/ourCollabrotion.service'

export class OurCollabrotionController {
    static getOurCollabrotion: Handler = async (req, res) => {
        const ourCollabrotion = await new OurCollabrotionService().ourCollabrotionFindAll()
        res.json({ ourCollabrotion })
    }
    static getOurCollabrotionId: Handler = async (req, res) => {
        const { id } = req.body
        const ourCollabrotion = new OurCollabrotionService().ourCollabrotionFind(id)
        res.json({ ourCollabrotion: await ourCollabrotion.ourCollabrotion })
    }
    static createOurCollabrotion: Handler = async (req, res) => {
        const { link, text, title } = req.body
        const ourCollabrotionService = new OurCollabrotionService()

        const { image } = req.files as any | any[]

        const ourCollabrotion = await ourCollabrotionService.ourCollabrotionCreate(link, image[0].path, text, title)
        if (ourCollabrotion.message) {
            res.json({
                error: ourCollabrotion.message
            })
        }
        else {
            res.json({
                message: await ourCollabrotion.create
            })
        }

    }
    static updateOurCollabrotion: Handler = async (req, res) => {
        const ourCollabrotionService = new OurCollabrotionService()
        const { id, link, text, title } = req.body

        const { image } = req.files as any | any[]
        const ourCollabrotion = ourCollabrotionService.ourCollabrotionUpdate(id, link, image[0].path, text, title)
        if (ourCollabrotion.message) {
            res.json({
                error: ourCollabrotion.message
            })
        }
        else {
            res.json({
                message: await ourCollabrotion.update
            })
        }

    }
    static deleteOurCollabrotion: Handler = async (req, res) => {
        const ourCollabrotionService = new OurCollabrotionService()
        const { id } = req.body
        const ourCollabrotion = ourCollabrotionService.ourCollabrotionDelete(id)
        if (ourCollabrotion.message) {
            res.json({
                error: ourCollabrotion.message
            })
        }
        else {
            res.json({
                message: await ourCollabrotion.delete
            })
        }

    }
}
