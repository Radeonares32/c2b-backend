import { ObjectId } from 'mongoose'
export interface IOpenEdu {
    name: string
    description: string
    thumbnailImage: string
    html: string
    date: string
    status: boolean
    category: ObjectId

}