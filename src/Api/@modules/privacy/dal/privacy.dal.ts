//? Repository
import { PrivacyRepository } from '../repository/privacy.repo'

//? Entity
import { IPrivacy } from '../entity/IPrivacy'

//? Models
import { Privacy } from '../models/privacy.models'

export class PrivacyDal implements PrivacyRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Privacy.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(title: string,context: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {

                await Privacy.create({title,context })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IPrivacy> {
        return new Promise(async (resolve, reject) => {
            try {
                const privacy = await Privacy.findById(id)
                resolve(privacy as IPrivacy)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IPrivacy[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const privacy = await Privacy.find()
                resolve(privacy as IPrivacy[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, title: string,context: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const privacy = await Privacy.findByIdAndUpdate(id, { title,context })
                privacy?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}