//? Repository
import { SeoRepository } from '../repository/seo.repo'

//? Entity
import { ISeo } from '../entity/seo.entity'

//? Models
import { Seo } from '../models/seo.models'

export class SeoDal implements SeoRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Seo.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(title: string, description: string, keywords: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await Seo.create({ title, description, keywords })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<ISeo> {
        return new Promise(async (resolve, reject) => {
            try {
                const seo = await Seo.findById(id)
                resolve(seo as ISeo)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<ISeo[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const seo = await Seo.find()
                resolve(seo as ISeo[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, title: string, description: string, keywords: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const seo = await Seo.findByIdAndUpdate(id, { title, description, keywords })
                seo?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}