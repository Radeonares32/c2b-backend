//? Repository
import { AnnouncementRepository } from '../repository/announcement.repo'

//? Entity
import { IAnnouncement } from '../entity/announcement.entity'

//? Models
import { Announcement } from '../models/announcement.models'

export class  AnnouncementDal implements AnnouncementRepository {
    async delete(id: string): Promise<{ message: string }> {
        await  Announcement.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(title: string,image: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                
                await Announcement.create({ title,image })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IAnnouncement> {

        return new Promise(async (resolve, reject) => {
            try {
                const announcement = await Announcement.findById(id)
                resolve(announcement as IAnnouncement)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IAnnouncement[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const announcement = await Announcement.find()
                resolve(announcement as IAnnouncement[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, title: string,image: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const announcement = await Announcement.findByIdAndUpdate(id, { title,image })
                announcement?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}