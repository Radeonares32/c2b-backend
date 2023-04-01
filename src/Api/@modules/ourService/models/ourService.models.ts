import { model, Schema } from 'mongoose'

//! Entity
import { IOurService } from '../entity/IOurService'

const OurServiceSchema = new Schema<IOurService>({
    link: {
        type: String
    },
    text: {
        type: String
    },
    title: {
        type: String
    }
})
export const OurService = model('OurService', OurServiceSchema)