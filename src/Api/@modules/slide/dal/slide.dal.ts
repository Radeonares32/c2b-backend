//? Repository
import { SlideRepository } from '../repository/slide.repo'

//? Entity
import { ISlide } from '../entity/slide'

//? Models
import { Slide } from '../models/slide.models'

export class SlideDal implements SlideRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Slide.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(header:string,text:string,image:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {

                await Slide.create({ header,text,image })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<ISlide> {
        return new Promise(async (resolve, reject) => {
            try {
                const slide = await Slide.findById(id)
                resolve(slide as ISlide)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<ISlide[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const slide = await Slide.find()
                resolve(slide as ISlide[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, header:string,text:string,image:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const slide = await Slide.findByIdAndUpdate(id, { header,text,image })
                slide?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}