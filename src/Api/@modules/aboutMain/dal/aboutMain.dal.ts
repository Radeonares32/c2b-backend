//? Repository
import { AboutMainRepository } from '../repository/aboutMain.repo'

//? Entity
import { IAboutMain } from '../entity/IaboutMain'

//? Models
import { AboutMain } from '../models/aboutMain.models'

export class AboutMainDal implements AboutMainRepository {
    async delete(id: string): Promise<{ message: string }> {
        await AboutMain.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(title: string, html: [{ title: string; context: string; }], image: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await AboutMain.create({ title, html, image })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IAboutMain> {

        return new Promise(async (resolve, reject) => {
            try {
                const aboutMain = await AboutMain.findById(id)
                resolve(aboutMain as IAboutMain)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IAboutMain[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const aboutMain = await AboutMain.find()
                resolve(aboutMain as IAboutMain[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, title: string, html: [{ title: string; context: string; }], image: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const aboutMain = await AboutMain.findByIdAndUpdate(id, { title, html, image })
                aboutMain?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}