import { model, Schema } from 'mongoose'

//! Entity
import { ISolutionMain } from '../entity/ISolutionMain'

const SolutionMainSchema = new Schema<ISolutionMain>({
    image: {
        type: String
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    pageImage: {
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
    },
    questions: {
        type: [{ question: String, context: String }]
    }
})
export const SolutionMain = model('SolutionMain', SolutionMainSchema)