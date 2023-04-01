import { ICategory } from '../entity/ICategory'
export interface CategoryRepository {
    create(title: string): Promise<{ message: string }>
    find(id: string): Promise<ICategory>
    findAll(): Promise<ICategory[]>
    update(id: string, title: string): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}