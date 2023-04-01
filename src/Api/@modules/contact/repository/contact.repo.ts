import { IContact } from '../entity/contact.entity'
export interface ContactRepository {
    create(name: string, surname: string, email: string,address:string): Promise<{ message: string }>
    find(id: string): Promise<IContact>
    findAll(): Promise<IContact[]>
    update(id: string,name: string, surname: string, email: string,address:string): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}