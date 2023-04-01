//? Repository
import { SolutionMainRepository } from '../repository/solutionMain.repo'

//? Entity
import { ISolutionMain } from '../entity/ISolutionMain'

//? Models
import { SolutionMain } from '../models/solutionMain.models'

export class SolutionDal implements SolutionMainRepository {
    async delete(id: string): Promise<{ message: string }> {
        await SolutionMain.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(image: string, pageImage: string, title: string, text: string, description: string, html: [{ title: string; context: string; }], icon: [{ src: string; context: string; }], questions: [{ question: string; context: string; }]): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {

                await SolutionMain.create({ image, title, text, description, html, icon, pageImage, questions })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<ISolutionMain> {
        return new Promise(async (resolve, reject) => {
            try {
                const solutionMain = await SolutionMain.findById(id)
                resolve(solutionMain as ISolutionMain)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<ISolutionMain[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const solutionMain = await SolutionMain.find()
                resolve(solutionMain as ISolutionMain[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, image: string, pageImage: string, title: string, text: string, description: string, html: [{ title: string; context: string; }], icon: [{ src: string; context: string; }], questions: [{ question: string; context: string; }]): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const solutionMain = await SolutionMain.findByIdAndUpdate(id, { image, title, text, description, html, icon, pageImage, questions })
                solutionMain?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}