import { model, Schema } from 'mongoose'

//! Entity
import { ICategory } from '../entity/ICategory'

const CategorySchema = new Schema<ICategory>({
    title: {
        type: String
    }
})
export const Category = model('OpenEduCategory', CategorySchema)