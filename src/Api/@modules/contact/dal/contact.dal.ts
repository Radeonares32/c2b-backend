//? Repository
import { ContactRepository } from '../repository/contact.repo'

//? Entity
import { IContact } from '../entity/contact.entity'

//? Models
import { Contact } from '../models/contact.models'

export class ContactDal implements ContactRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Contact.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(name: string, surname: string, email: string,address:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await Contact.create({ name,surname,email,address })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IContact> {
        return new Promise(async (resolve, reject) => {
            try {
                const contact = await Contact.findById(id)
                resolve(contact as IContact)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IContact[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const contact = await Contact.find()
                resolve(contact as IContact[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, name: string, surname: string, email: string,address:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const contact = await Contact.findByIdAndUpdate(id, { name,surname,email,address })
                contact?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}