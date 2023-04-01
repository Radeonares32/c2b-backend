//? Repository
import { OurServiceRepository } from '../repository/ourService.repo'

//? Entity
import { IOurService } from '../entity/IOurService'

//? Models
import { OurService } from '../models/ourService.models'

export class OurServicenDal implements OurServiceRepository {
    async delete(id: string): Promise<{ message: string }> {
        await OurService.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(link: string, text: string, title: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {

                await OurService.create({ link, text, title })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IOurService> {
        return new Promise(async (resolve, reject) => {
            try {
                const ourService = await OurService.findById(id)
                resolve(ourService as IOurService)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IOurService[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const ourService = await OurService.find()
                resolve(ourService as IOurService[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, link: string, text: string, title: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const ourService = await OurService.findByIdAndUpdate(id, { link, text, title })
                ourService?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}