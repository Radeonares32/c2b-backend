import { model, Schema } from 'mongoose'

//! Entity
import { IPrivacy } from '../entity/IPrivacy'

const PrivacySchema = new Schema<IPrivacy>({
    title: {
        type: String
    },
    context: {
        type: String
    }
})
export const Privacy = model('Privacy', PrivacySchema)