import { model, Schema } from 'mongoose'

//! Entity
import { IAboutMain } from '../entity/IaboutMain'

const AboutMainSchema = new Schema<IAboutMain>({
    title: {
        type: String
    },
    html: {
        type: [{ title: String, context: String }]
    },
    image: {
        type: String
    }
})
export const AboutMain = model('AboutMain', AboutMainSchema)