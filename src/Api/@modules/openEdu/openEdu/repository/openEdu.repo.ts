import { IOpenEdu } from '../entity/IOpenEdu.entity'
import { Types } from 'mongoose'
export interface OpenEduRepository {
    create(name: string, description: string, thumbnailImage:string, html: string,date:string,status:boolean,category: Types.ObjectId): Promise<{ message: string }>
    find(id: string): Promise<IOpenEdu>
    findAll(): Promise<IOpenEdu[]>
    update(id: string, name: string, description: string, thumbnailImage:string, html: string,date:string,status:boolean,category: Types.ObjectId): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}