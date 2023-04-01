import { model, Schema } from 'mongoose'

//! Entity
import { IOurCollabrotion } from '../entity/ourCollabrotion'

const OurCollabrotionSchema = new Schema<IOurCollabrotion>({
    link: {
        type: String
    },
    image: {
        type: String
    },
    text: {
        type: String
    },
    title: {
        type: String
    }
})
export const OurCollabrotion = model('OurCollabrotion', OurCollabrotionSchema)