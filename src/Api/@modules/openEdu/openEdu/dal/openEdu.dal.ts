import { Types } from 'mongoose'
//? Repository
import { OpenEduRepository } from '../repository/openEdu.repo'

//? Entity
import { IOpenEdu } from '../entity/IOpenEdu.entity'

//? Models
import { OpenEdu } from '../models/openEdu.models'

export class OpenEduDal implements OpenEduRepository {
    async delete(id: string): Promise<{ message: string }> {
        await OpenEdu.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(name: string, description: string, thumbnailImage: string, html: string, date: string, status: boolean, category: Types.ObjectId): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await OpenEdu.create({ name, description, thumbnailImage, html, date, status, category })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IOpenEdu> {
        return new Promise(async (resolve, reject) => {
            try {
                const openEdu = await OpenEdu.findById(id)
                resolve(openEdu as IOpenEdu)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IOpenEdu[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const openEdu = await OpenEdu.find().populate('category')
                resolve(openEdu as IOpenEdu[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, name: string, description: string, thumbnailImage: string, html: string, date: string, status: boolean, category: Types.ObjectId): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const openEdu = await OpenEdu.findByIdAndUpdate(id, { name, description, thumbnailImage, html, date, status, category })
                openEdu?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}