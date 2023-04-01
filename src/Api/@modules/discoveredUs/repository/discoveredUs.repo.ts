import { IDiscoveredUs } from '../entity/IDiscoveredUs.entity'
export interface DiscoveredUsRepository {
    create(address: string, email: string, phone: string,instagram: string, facebook: string, linkedin: string,mapLink:string): Promise<{ message: string }>
    find(id: string): Promise<IDiscoveredUs>
    findAll(): Promise<IDiscoveredUs[]>
    update(id: string, address: string, email: string, phone: string,instagram: string, facebook: string, linkedin: string,mapLink:string): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}