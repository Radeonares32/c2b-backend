//? Repository
import { AboutRepository } from '../repository/about.repo'

//? Entity
import { IAbout } from '../entity/IAbout'

//? Models
import { About } from '../models/about.models'

export class AboutDal implements AboutRepository {
    async delete(id: string): Promise<{ message: string }> {
        await About.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(image: string, title: string, text: string, description: string, html: [{ title: string; context: string; }], icon: [{ src: string; context: string; }]): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                
                await About.create({ image, title, text, description, html, icon })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IAbout> {

        return new Promise(async (resolve, reject) => {
            try {
                const about = await About.findById(id)
                resolve(about as IAbout)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IAbout[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const about = await About.find()
                resolve(about as IAbout[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, image: string, title: string, text: string, description: string, html: [{ title: string; context: string; }], icon: [{ src: string; context: string; }]): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const about = await About.findByIdAndUpdate(id, { image, title, text, description,  html, icon  })
                about?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}