import { Types } from 'mongoose'
//? Repository
import { ProjectConsultantRepository } from '../repository/projectConsultant.repo'

//? Entity
import { IProjectConsultant } from '../entity/projectConsultant.entity'

//? Models
import { ProjectConsultant } from '../models/projectConsultant.models'

export class ProjectConsultantDal implements ProjectConsultantRepository {
    async delete(id: string): Promise<{ message: string }> {
        await ProjectConsultant.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(title: string, subTitle: string, text: string, image: string, category: Types.ObjectId): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await ProjectConsultant.create({ title,subTitle,text,image,category })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IProjectConsultant> {
        return new Promise(async (resolve, reject) => {
            try {
                const projectConsultant = await ProjectConsultant.findById(id)
                resolve(projectConsultant as IProjectConsultant)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IProjectConsultant[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const projectConsultant = await ProjectConsultant.find().populate('category')
                resolve(projectConsultant as IProjectConsultant[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, title: string, subTitle: string, text: string, image: string, category: Types.ObjectId): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const projectConsultant = await ProjectConsultant.findByIdAndUpdate(id, { title,subTitle,text,image,category })
                projectConsultant?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}