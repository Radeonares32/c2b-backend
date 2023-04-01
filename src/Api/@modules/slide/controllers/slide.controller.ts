import { Handler } from 'express'
//! Service
import { SlideService } from '../services/slide.service'

export class SlideController {
    static getSlide: Handler = async (req, res) => {
        const slide = await new SlideService().slideFindAll()
        res.json({ slide })
    }
    static getSlideId: Handler = async (req, res) => {
        const { id } = req.body
        const slide = new SlideService().slideFind(id)
        res.json({ slide: await slide.slide })
    }
    static createSlide: Handler = async (req, res) => {
        const { header, text } = req.body
        const slideService = new SlideService()

        const { image } = req.files as any | any[]

        const slide = await slideService.slideCreate(header,text,image[0].path)
        if (slide.message) {
            res.json({
                error: slide.message
            })
        }
        else {
            res.json({
                message: await slide.create
            })
        }

    }
    static updateSlide: Handler = async (req, res) => {
        const slideService = new SlideService()
        const { id,header, text } = req.body

        const { image } = req.files as any | any[]
        const slide = slideService.slideUpdate(id, header, text,image[0].path)
        if (slide.message) {
            res.json({
                error: slide.message
            })
        }
        else {
            res.json({
                message: await slide.update
            })
        }

    }
    static deleteSlide: Handler = async (req, res) => {
        const slideService = new SlideService()
        const { id } = req.body
        const slide = slideService.slideDelete(id)
        if (slide.message) {
            res.json({
                error: slide.message
            })
        }
        else {
            res.json({
                message: await slide.delete
            })
        }

    }
}
