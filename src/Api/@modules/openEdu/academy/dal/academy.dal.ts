//? Repository
import { AcademyRepository } from '../repository/academy.repo'

//? Entity
import { IAcademy } from '../entity/IAcademy.entity'

//? Models
import { Academy } from '../models/academy.models'

export class AcademyDal implements AcademyRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Academy.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(icon: [{ src: string; context: string; }]): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {

                await Academy.create({ icon })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IAcademy> {
        return new Promise(async (resolve, reject) => {
            try {
                const academy = await Academy.findById(id)
                resolve(academy as IAcademy)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IAcademy[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const academy = await Academy.find()
                resolve(academy as IAcademy[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, icon: [{ src: string; context: string; }]): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const main = await Academy.findByIdAndUpdate(id, { icon })
                main?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}