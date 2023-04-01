import { model, Schema } from 'mongoose'

//! Entity
import { IAdmin } from '../entity/IAdmin'

const AdminSchema = new Schema<IAdmin>({
    name:{
        type:String
    },
    surname:{
        type:String
    },
    identityNumber:{
        type:String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
    gsmNumber:{
        type:String
    },
    zipCode:{
        type:String
    },
})
export const Admin = model('Admin', AdminSchema)