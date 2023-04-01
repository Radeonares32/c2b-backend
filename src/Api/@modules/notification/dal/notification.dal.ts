//? Repository
import { NotificationRepository } from '../repository/notification.repo'

//? Entity
import { INotification } from '../entity/INotification'

//? Models
import { Notification } from '../models/notification.models'

export class NotificationDal implements NotificationRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Notification.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(title: string, context: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await Notification.create({ title, context })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<INotification> {
        return new Promise(async (resolve, reject) => {
            try {
                const notification = await Notification.findById(id)
                resolve(notification as INotification)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<INotification[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const notification = await Notification.find()
                resolve(notification as INotification[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, title: string, context: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const notification = await Notification.findByIdAndUpdate(id, { title, context })
                notification?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}