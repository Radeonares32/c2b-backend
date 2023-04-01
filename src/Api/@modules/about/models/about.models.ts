import { model, Schema } from 'mongoose'

//! Entity
import { IAbout } from '../entity/IAbout'

const AboutSchema = new Schema<IAbout>({
    image: {
        type: String
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    description: {
        type: String
    },
    html: {
        type: [{ title: String, context: String }]
    },
    icon: {
        type: [{ src: String, context: String }]
    }
})
export const About = model('About', AboutSchema)