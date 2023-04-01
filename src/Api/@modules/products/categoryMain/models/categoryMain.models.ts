import { model, Schema } from 'mongoose'

//! Entity
import { ICategoryMain } from '../entity/ICategoryMain'

const CategoryMainSchema = new Schema<ICategoryMain>({
    title: {
        type: String
    }
})
export const CategoryMain = model('CategoryMain', CategoryMainSchema)