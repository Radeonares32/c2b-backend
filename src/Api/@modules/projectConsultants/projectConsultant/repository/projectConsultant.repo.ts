import { IProjectConsultant } from '../entity/projectConsultant.entity'
import { Types } from 'mongoose'
export interface ProjectConsultantRepository {
    create(title: string, subTitle: string, text: string, image: string, category: Types.ObjectId): Promise<{ message: string }>
    find(id: string): Promise<IProjectConsultant>
    findAll(): Promise<IProjectConsultant[]>
    update(id: string, title: string, subTitle: string, text: string, image: string, category: Types.ObjectId): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}