import { model, Schema } from 'mongoose'

//! Entity
import { ICategory } from '../entity/ICategory'

const CategorySchema = new Schema<ICategory>({
    title: {
        type: String
    },
    categoryMain: {
        type: Schema.Types.ObjectId,
        ref: "CategoryMain"
    }
})
export const Category = model('Category', CategorySchema)