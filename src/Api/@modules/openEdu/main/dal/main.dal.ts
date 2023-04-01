//? Repository
import { MainRepository } from '../repository/main.repo'

//? Entity
import { IMain } from '../entity/IMain.entity'

//? Models
import { Main } from '../models/IMain.models'

export class MainDal implements MainRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Main.findByIdAndDelete(id)
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

                await Main.create({ icon })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IMain> {
        return new Promise(async (resolve, reject) => {
            try {
                const main = await Main.findById(id)
                resolve(main as IMain)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IMain[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const main = await Main.find()
                resolve(main as IMain[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, icon: [{ src: string; context: string; }]): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const main = await Main.findByIdAndUpdate(id, { icon })
                main?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}