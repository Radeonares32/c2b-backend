import { model, Schema } from 'mongoose'

//! Entity
import { IContactForm } from '../entity/IContactForm.entity'

const ContactFormSchema = new Schema<IContactForm>({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    email: {
        type: String
    },
    companyName: {
        type: String
    },
    message: {
        type: String
    },
    type: {
        type: Number
    },
    isAccept: {
        type: Boolean
    }
})
export const ContactForm = model('ContactForm', ContactFormSchema)