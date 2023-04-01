import { model, Schema } from 'mongoose'

//! Entity
import { IContact } from '../entity/contact.entity'


const ContactSchema = new Schema<IContact>({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    }
})
export const Contact = model('Contact', ContactSchema)