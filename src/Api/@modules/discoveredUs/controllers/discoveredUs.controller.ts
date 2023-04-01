import { Handler } from 'express'
//! Service
import { DiscoveredUsService } from '../services/discoveredUs.service'

export class DiscoveredUsController {
    static getDiscoveredUs: Handler = async (req, res) => {
        const discoveredUs = await new DiscoveredUsService().discoveredUsFindAll()
        res.json({ discoveredUs })
    }
    static getDiscoveredUsId: Handler = async (req, res) => {
        const { id } = req.body
        const discoveredUs = new DiscoveredUsService().discoveredUsFind(id)
        res.json({ discoveredUs: await discoveredUs.discoveredUs })
    }
    static createDiscoveredUs: Handler = async (req, res) => {
        const discoveredUsService = new DiscoveredUsService()
        const { address, email, phone, instagram, facebook, linkedin, mapLink } = req.body
        const discoveredUs = await discoveredUsService.discoveredUsCreate(address, email, phone, instagram, facebook, linkedin, mapLink)
        if (discoveredUs.message) {
            res.json({
                error: discoveredUs.message
            })
        }
        else {
            res.json({
                message: await discoveredUs.create
            })
        }
    }
    static updateDiscoveredUs: Handler = async (req, res) => {
        const discoveredUsService = new DiscoveredUsService()
        const { id, address, email, phone, instagram, facebook, linkedin, mapLink } = req.body
        const discoveredUs = discoveredUsService.discoveredUsUpdate(id, address, email, phone, instagram, facebook, linkedin, mapLink)
        if (discoveredUs.message) {
            res.json({
                error: discoveredUs.message
            })
        }
        else {
            res.json({
                message: await discoveredUs.update
            })
        }
    }
    static deleteDiscoveredUs: Handler = async (req, res) => {
        const discoveredUsService = new DiscoveredUsService()
        const { id } = req.body
        const discoveredUs = discoveredUsService.discoveredUsDelete(id)
        if (discoveredUs.message) {
            res.json({
                error: discoveredUs.message
            })
        }
        else {
            res.json({
                message: await discoveredUs.delete
            })
        }
    }
}
