import { ISeo } from '../entity/seo.entity'
export interface SeoRepository {
    create(title: string, description: string, keywords: string): Promise<{ message: string }>
    find(id: string): Promise<ISeo>
    findAll(): Promise<ISeo[]>
    update(id: string, title: string, description: string, keywords: string): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}