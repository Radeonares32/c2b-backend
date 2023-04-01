import { model, Schema } from 'mongoose'

//! Entity
import { IBlogMain } from '../entity/IBlogMain'

const BlogMainSchema = new Schema<IBlogMain>({
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
export const BlogMain = model('BlogMain', BlogMainSchema)