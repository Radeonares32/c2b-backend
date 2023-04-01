import { model, Schema } from 'mongoose'

//! Entity
import { IProduct } from '../entity/IProduct'

const ProductSchema = new Schema<IProduct>({
    name: {
        type: String
    },
    description: {
        type: String
    },
    types: {
        type: [{ types: String, context: String }]
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    discount: {
        type: Number
    },
    images: {
        type: [{ src: String }]
    },
    cargo: {
        type: [{ title: String, src: String }]
    },
    property: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
})
export const Product = model('Product', ProductSchema)