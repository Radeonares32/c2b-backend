import { IMain } from '../entity/IMain.entity'
export interface MainRepository {
    create(icon: [{ src: string; context: string; }]): Promise<{ message: string }>
    find(id: string): Promise<IMain>
    findAll(): Promise<IMain[]>
    update(id: string, icon: [{ src: string; context: string; }]): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}