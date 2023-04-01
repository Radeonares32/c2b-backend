import { IContactForm } from '../entity/IContactForm.entity'
export interface ContactFormRepository {
    create(name: string, surname: string, email: string,companyName: string, message: string, type: number,isAccept:boolean): Promise<{ message: string }>
    find(id: string): Promise<IContactForm>
    findAll(): Promise<IContactForm[]>
    update(id: string, name: string, surname: string, email: string,companyName: string, message: string, type: number,isAccept:boolean): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}