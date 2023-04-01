import { ICategory } from '../entity/ICategory'
import { Types } from 'mongoose'
export interface CategoryRepository {
    create(title: string, categoryMain: Types.ObjectId): Promise<{ message: string }>
    find(id: string): Promise<ICategory>
    findAll(): Promise<ICategory[]>
    update(id: string, title: string, categoryMain: Types.ObjectId): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}