import { Handler } from 'express'
//! Service
import { ContactFormService } from '../services/contactForm.service'

export class ContactFormController {
    static getContactForm: Handler = async (req, res) => {
        const contactForm = await new ContactFormService().contactFormFindAll()
        res.json({ contactForm })
    }
    static getContactFormId: Handler = async (req, res) => {
        const { id } = req.body
        const contactForm = new ContactFormService().contactFormFind(id)
        res.json({ contactForm: await contactForm.contactForm })
    }
    static createContactForm: Handler = async (req, res) => {
        const contactFormService = new ContactFormService()
        const { name,surname,email,companyName,message,type,isAccept } = req.body
        const contactForm = await contactFormService.contactFormCreate( name,surname,email,companyName,message,type,isAccept)
        if (contactForm.message) {
            res.json({
                error: contactForm.message
            })
        }
        else {
            res.json({
                message: await contactForm.create
            })
        }
    }
    static updateContactForm: Handler = async (req, res) => {
        const contactFormService = new ContactFormService()
        const { id, name,surname,email,companyName,message,type,isAccept} = req.body
        const contactForm = contactFormService.contactFormUpdate(id, name,surname,email,companyName,message,type,isAccept)
        if (contactForm.message) {
            res.json({
                error: contactForm.message
            })
        }
        else {
            res.json({
                message: await contactForm.update
            })
        }
    }
    static deleteContactForm: Handler = async (req, res) => {
        const contactFormService = new ContactFormService()
        const { id } = req.body
        const contactForm = contactFormService.contactFormDelete(id)
        if (contactForm.message) {
            res.json({
                error: contactForm.message
            })
        }
        else {
            res.json({
                message: await contactForm.delete
            })
        }
    }
}
