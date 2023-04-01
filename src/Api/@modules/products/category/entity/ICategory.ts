import { ObjectId } from 'mongoose'

export interface ICategory {
    title: string
    categoryMain: ObjectId
}