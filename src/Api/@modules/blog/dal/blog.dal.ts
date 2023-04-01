//? Repository
import { BlogRepository } from '../repository/blog.repo'

//? Entity
import { IBlog } from '../entity/IBlog'

//? Models
import { Blog } from '../models/blog.models'

export class BlogDal implements BlogRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Blog.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(image: string, title: string, text: string, description: string, html: [{ title: string; context: string; }], icon: [{ src: string; context: string; }], questions: [{ question: string; context: string; }]): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {

                await Blog.create({ image, title, text, description, html, icon, questions })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IBlog> {
        return new Promise(async (resolve, reject) => {
            try {
                const blog = await Blog.findById(id)
                resolve(blog as IBlog)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IBlog[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const blog = await Blog.find()
                resolve(blog as IBlog[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, image: string,  title: string, text: string, description: string, html: [{ title: string; context: string; }], icon: [{ src: string; context: string; }], questions: [{ question: string; context: string; }]): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const blog = await Blog.findByIdAndUpdate(id, { image, title, text, description, html, icon, questions })
                blog?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}