//? Repository
import { CategoryMainRepository } from '../repository/categoryMain.repo'

//? Entity
import { ICategoryMain } from '../entity/ICategoryMain'

//? Models
import { CategoryMain } from '../models/categoryMain.models'

export class CategoryMainDal implements CategoryMainRepository {
    async delete(id: string): Promise<{ message: string }> {
        await CategoryMain.findByIdAndDelete(id)
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
                await CategoryMain.create({ title })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<ICategoryMain> {
        return new Promise(async (resolve, reject) => {
            try {
                const categoryMain = await CategoryMain.findById(id)
                resolve(categoryMain as ICategoryMain)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<ICategoryMain[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const categoryMain = await CategoryMain.find()
                resolve(categoryMain as ICategoryMain[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, title: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const categoryMain = await CategoryMain.findByIdAndUpdate(id, { title })
                categoryMain?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}