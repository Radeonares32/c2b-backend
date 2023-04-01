import { model, Schema } from 'mongoose'

//! Entity
import { IMain } from '../entity/IMain.entity'

const OpenEduMainSchema = new Schema<IMain>({
    icon: {
        type: [{ src: String, context: String }]
    },
    
})
export const Main = model('OpenEduMain', OpenEduMainSchema)