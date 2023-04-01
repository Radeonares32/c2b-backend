//? Repository
import { CategoryRepository } from '../repository/category.repo'

//? Entity
import { ICategory } from '../entity/ICategory'

//? Models
import { Category } from '../models/category.models'

export class CategoryDal implements CategoryRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Category.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(title: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await Category.create({ title })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<ICategory> {
        return new Promise(async (resolve, reject) => {
            try {
                const category = await Category.findById(id)
                resolve(category as ICategory)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<ICategory[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const category = await Category.find()
                resolve(category as ICategory[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, title: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const category = await Category.findByIdAndUpdate(id, { title })
                category?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}