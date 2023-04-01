//? Repository
import { BlogMainRepository } from '../repository/blogMain.repo'

//? Entity
import { IBlogMain } from '../entity/IBlogMain'

//? Models
import { BlogMain } from '../models/blogMain.models'

export class BlogMainDal implements BlogMainRepository {
    async delete(id: string): Promise<{ message: string }> {
        await BlogMain.findByIdAndDelete(id)
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

                await BlogMain.create({ image, title, text, description, html, icon, pageImage, questions })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IBlogMain> {
        return new Promise(async (resolve, reject) => {
            try {
                const blogMain = await BlogMain.findById(id)
                resolve(blogMain as IBlogMain)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IBlogMain[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const blogMain = await BlogMain.find()
                resolve(blogMain as IBlogMain[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, image: string, pageImage: string, title: string, text: string, description: string, html: [{ title: string; context: string; }], icon: [{ src: string; context: string; }], questions: [{ question: string; context: string; }]): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const blogMain = await BlogMain.findByIdAndUpdate(id, { image, title, text, description, html, icon, pageImage, questions })
                blogMain?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}