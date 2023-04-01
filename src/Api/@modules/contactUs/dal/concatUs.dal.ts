//? Repository
import { ConcatUsRepository } from '../repository/concatUs.repo'

//? Entity
import { IConcatUs } from '../entity/concatUs.entity'

//? Models
import { ConcatUs } from '../models/concatUs.models'

export class ConcatUsDal implements ConcatUsRepository {
    async delete(id: string): Promise<{ message: string }> {
        await ConcatUs.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(address:string, email:string, phone:string, instagram:string, facebook:string, linkedin:string, mapLink:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await ConcatUs.create({ address,email,phone,instagram,facebook,linkedin,mapLink })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IConcatUs> {
        return new Promise(async (resolve, reject) => {
            try {
                const concatUs = await ConcatUs.findById(id)
                resolve(concatUs as IConcatUs)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IConcatUs[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const concatUs = await ConcatUs.find()
                resolve(concatUs as IConcatUs[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id:string, address:string, email:string, phone:string, instagram:string, facebook:string, linkedin:string, mapLink:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const concatUs = await ConcatUs.findByIdAndUpdate(id, { address,email,phone,instagram,facebook,linkedin,mapLink })
                concatUs?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}