import { Handler } from 'express'
//! Service
import { ContactService } from '../services/contact.service'

export class ContactController {
    static getContact: Handler = async (req, res) => {
        const contact = await new ContactService().contactFindAll()
        res.json({ contact })
    }
    static getMenuId: Handler = async (req, res) => {
        const { id } = req.body
        const contact = new ContactService().contactFind(id)
        res.json({ contact: await contact.contact })
    }
    static createContact: Handler = async (req, res) => {
        const contactService = new ContactService()
        const { name, surname, email, address } = req.body
        const contact = await contactService.contactCreate(name, surname, email, address)
        if (contact.message) {
            res.json({
                error: contact.message
            })
        }
        else {
            res.json({
                message: await contact.create
            })
        }
    }
    static updateContact: Handler = async (req, res) => {
        const contactService = new ContactService()
        const { id, name, surname, email, address } = req.body
        const contact = contactService.contactUpdate(id, name, surname, email, address)
        if (contact.message) {
            res.json({
                error: contact.message
            })
        }
        else {
            res.json({
                message: await contact.update
            })
        }
    }
    static deleteContact: Handler = async (req, res) => {
        const contactService = new ContactService()
        const { id } = req.body
        const contact = contactService.contactDelete(id)
        if (contact.message) {
            res.json({
                error: contact.message
            })
        }
        else {
            res.json({
                message: await contact.delete
            })
        }
    }
}
