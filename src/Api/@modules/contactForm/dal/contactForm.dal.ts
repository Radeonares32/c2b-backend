//? Repository
import { ContactFormRepository } from '../repository/contactForm.repo'

//? Entity
import { IContactForm } from '../entity/IContactForm.entity'

//? Models
import { ContactForm } from '../models/contactForm.models'

export class ContactFormDal implements ContactFormRepository {
    async delete(id: string): Promise<{ message: string }> {
        await ContactForm.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(name: string, surname: string, email: string,companyName: string, message: string, type: number,isAccept:boolean): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await ContactForm.create({ name,surname,email,companyName,message,type,isAccept })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IContactForm> {
        return new Promise(async (resolve, reject) => {
            try {
                const contactForm = await ContactForm.findById(id)
                resolve(contactForm as IContactForm)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IContactForm[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const contactForm = await ContactForm.find()
                resolve(contactForm as IContactForm[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, name: string, surname: string, email: string,companyName: string, message: string, type: number,isAccept:boolean): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const contactForm = await ContactForm.findByIdAndUpdate(id, { name,surname,email,companyName,message,type,isAccept })
                contactForm?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}