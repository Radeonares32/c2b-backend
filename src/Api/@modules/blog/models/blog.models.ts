import { model, Schema } from 'mongoose'

//! Entity
import { IBlog } from '../entity/IBlog'

const BlogSchema = new Schema<IBlog>({
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
    },
    questions: {
        type: [{ question: String, context: String }]
    }
})
export const Blog = model('Blog', BlogSchema)