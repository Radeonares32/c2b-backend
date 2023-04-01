import { IProduct } from '../entity/IProduct'
import { Types } from 'mongoose'
export interface ProductRepository {
    create(name: string, description: string, types: [{ types: string, context: string }], quantity: number,price:number,discount:number, images: [{ src: string }], cargo: [{ title: string, src: string }], property: string, category: Types.ObjectId): Promise<{ message: string }>
    find(id: string): Promise<IProduct>
    findAll(): Promise<IProduct[]>
    update(id: string, name: string, description: string, types: [{ types: string, context: string }], quantity: number,price:number,discount:number, images: [{ src: string }], cargo: [{ title: string, src: string }], property: string, category: Types.ObjectId): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}