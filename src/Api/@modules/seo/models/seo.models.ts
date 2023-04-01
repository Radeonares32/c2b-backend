import { model, Schema } from 'mongoose'

//! Entity
import { ISeo } from '../entity/seo.entity'

const SeoSchema = new Schema<ISeo>({
    title: {
        type: String
    },
    description: {
        type: String
    },
    keywords: {
        type: String
    }
})
export const Seo = model('Seo', SeoSchema)