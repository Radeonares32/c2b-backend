import { model, Schema } from 'mongoose'

//! Entity
import { IConcatUs } from '../entity/concatUs.entity'

const ConcatUsSchema = new Schema<IConcatUs>({
    address:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    linkedin:{
        type:String
    },
    facebook:{
        type:String
    },
    instagram:{
        type:String
    },
    mapLink:{
        type:String
    }
})
export const ConcatUs = model('ConcatUs', ConcatUsSchema)