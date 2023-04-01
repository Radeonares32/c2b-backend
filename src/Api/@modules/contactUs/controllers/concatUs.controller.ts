import { Handler } from 'express'
//! Service
import { ConcatUsService } from '../services/concatUs.service'

export class ConcatUsController {
    static getConcatUs: Handler = async (req, res) => {
        const concatUs = await new ConcatUsService().concatUsFindAll()
        res.json({ concatUs })
    }
    static getConcatUsId: Handler = async (req, res) => {
        const { id } = req.body
        const concatUs = new ConcatUsService().concatUsFind(id)
        res.json({ concatUs: await concatUs.concatUs })
    }
    static createConcatUs: Handler = async (req, res) => {
        const concatUsService = new ConcatUsService()
        const { address,email,phone,instagram,facebook,linkedin,mapLink } = req.body
        const concatUs = await concatUsService.concatUsCreate(address,email,phone,instagram,facebook,linkedin,mapLink)
        if (concatUs.message) {
            res.json({
                error: concatUs.message
            })
        }
        else {
            res.json({
                message: await concatUs.create
            })
        }
    }
    static updateConcatUs: Handler = async (req, res) => {
        const concatUsService = new ConcatUsService()
        const { id, address,email,phone,instagram,facebook,linkedin,mapLink } = req.body
        const concatUs = concatUsService.concatUsUpdate(id, address,email,phone,instagram,facebook,linkedin,mapLink)
        if (concatUs.message) {
            res.json({
                error: concatUs.message
            })
        }
        else {
            res.json({
                message: await concatUs.update
            })
        }
    }
    static deleteConcatUs: Handler = async (req, res) => {
        const concatUsService = new ConcatUsService()
        const { id } = req.body
        const concatUs = concatUsService.concatUsDelete(id)
        if (concatUs.message) {
            res.json({
                error: concatUs.message
            })
        }
        else {
            res.json({
                message: await concatUs.delete
            })
        }
    }
}
