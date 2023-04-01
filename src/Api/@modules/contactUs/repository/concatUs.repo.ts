import { IConcatUs } from '../entity/concatUs.entity'
export interface ConcatUsRepository {
    create(address: string, email: string, phone: string,instagram:string,facebook:string,linkedin:string,mapLink:string): Promise<{ message: string }>
    find(id: string): Promise<IConcatUs>
    findAll(): Promise<IConcatUs[]>
    update(id: string, address: string, email: string, phone: string,instagram:string,facebook:string,linkedin:string,mapLink:string): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}