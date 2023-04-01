import { Types } from 'mongoose'
//? Repository
import { ProductRepository } from '../repository/product.repo'

//? Entity
import { IProduct } from '../entity/IProduct'

//? Models
import { Product } from '../models/product.models'

export class ProductDal implements ProductRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Product.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(name: string, description: string, types: [{ types: string, context: string }], quantity: number, price: number, discount: number, images: [{ src: string }], cargo: [{ title: string, src: string }], property: string, category: Types.ObjectId): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await Product.create({ name, description, types, quantity, images, cargo, property, price, discount, category })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IProduct> {
        return new Promise(async (resolve, reject) => {
            try {
                const product = await Product.findById(id)
                resolve(product as IProduct)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IProduct[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const product = await Product.find().populate('category')
                resolve(product as IProduct[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, name: string, description: string, types: [{ types: string, context: string }], quantity: number, price: number, discount: number, images: [{ src: string }], cargo: [{ title: string, src: string }], property: string, category: Types.ObjectId): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const product = await Product.findByIdAndUpdate(id, { name, description, types, quantity, price, discount, images, cargo, property, category })
                product?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}