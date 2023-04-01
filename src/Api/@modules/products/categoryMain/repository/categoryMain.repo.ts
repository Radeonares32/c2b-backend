import { ICategoryMain } from '../entity/ICategoryMain'
export interface CategoryMainRepository {
    create(title: string): Promise<{ message: string }>
    find(id: string): Promise<ICategoryMain>
    findAll(): Promise<ICategoryMain[]>
    update(id: string, title: string): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}