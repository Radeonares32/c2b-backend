//? Repository
import { OurCollabrotionRepository } from '../repository/ourCollabrotion.repo'

//? Entity
import { IOurCollabrotion } from '../entity/ourCollabrotion'

//? Models
import { OurCollabrotion } from '../models/ourCollabrotion.models'

export class OurCollabrotionDal implements OurCollabrotionRepository {
    async delete(id: string): Promise<{ message: string }> {
        await OurCollabrotion.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(link: string, image: string, text: string, title: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {

                await OurCollabrotion.create({ link, image, text, title })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IOurCollabrotion> {
        return new Promise(async (resolve, reject) => {
            try {
                const ourCollabrotion = await OurCollabrotion.findById(id)
                resolve(ourCollabrotion as IOurCollabrotion)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IOurCollabrotion[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const ourCollabrotion = await OurCollabrotion.find()
                resolve(ourCollabrotion as IOurCollabrotion[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, link: string, image: string, text: string, title: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const ourCollabrotion = await OurCollabrotion.findByIdAndUpdate(id, { link, image, text, title })
                ourCollabrotion?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}