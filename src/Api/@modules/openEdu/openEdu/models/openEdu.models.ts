import { model, Schema } from 'mongoose'

//! Entity
import { IOpenEdu } from '../entity/IOpenEdu.entity'

const OpenEduSchema = new Schema<IOpenEdu>({
    name: {
        type: String
    },
    description: {
        type: String
    },
    thumbnailImage: {
        type:String
    },
    html: {
        type: String
    },
    date: {
        type: String
    },
    status: {
        type: Boolean
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "OpenEduCategory"
    }
})
export const OpenEdu = model('OpenEdu', OpenEduSchema)