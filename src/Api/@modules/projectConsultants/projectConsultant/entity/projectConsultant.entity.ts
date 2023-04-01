import { ObjectId } from 'mongoose'
export interface IProjectConsultant {
    title: string
    subTitle: string
    text: string
    image: string
    category: ObjectId
}