import { ObjectId } from 'mongoose'
export interface IProduct {
    name: string
    description: string
    types: [{ types: string, context: string }]
    quantity: number
    price:number
    discount:number
    images: [{ src: string }]
    cargo: [{ title: string, src: string }]
    property: string
    category: ObjectId

}