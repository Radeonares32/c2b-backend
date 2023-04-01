import { model, Schema } from 'mongoose'

//! Entity
import { ISlide } from '../entity/slide'

const SlideSchema = new Schema<ISlide>({
    header: {
        type: String
    },
    image: {
        type: String
    },
    text: {
        type: String
    }
})
export const Slide = model('Slide', SlideSchema)