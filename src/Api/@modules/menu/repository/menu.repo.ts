import { IMenu } from '../entity/IMenu'
export interface MenuRepository {
    create(name: string, type: string, status: boolean): Promise<{ message: string }>
    find(id: string): Promise<IMenu>
    findAll(): Promise<IMenu[]>
    update(id: string, name: string, type: string, status: boolean): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}