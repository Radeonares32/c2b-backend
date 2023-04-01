//? Repository
import { AdminRepository } from '../repository/admin.repo'

//? Entity
import { IAdmin } from '../entity/IAdmin'

//? Models
import { Admin } from '../models/admin.model'

export class AdminDal implements AdminRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Admin.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(name:string,surname:string,email: string, password: string,gsmNumber:string,identityNumber:string,city:string,country:string,zipCode:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {

                await Admin.create({ email, password,name,surname,gsmNumber,identityNumber,city,country,zipCode })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IAdmin> {

        return new Promise(async (resolve, reject) => {
            try {
                const admin = await Admin.findById(id)
                resolve(admin as IAdmin)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IAdmin[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const admin = await Admin.find()
                resolve(admin as IAdmin[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string,name:string,surname:string,email: string, password: string,gsmNumber:string,identityNumber:string,city:string,country:string,zipCode:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const admin = await Admin.findByIdAndUpdate(id, {  email, password,name,surname,gsmNumber,identityNumber,city,country,zipCode })
                admin?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    sign(email: string, password: string): Promise<IAdmin> {
        return new Promise(async (resolve, reject) => {
            try {
                const admin = await Admin.findOne({ email, password })
                resolve(admin as IAdmin)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    findEmail(email: string): Promise<IAdmin> {
        return new Promise(async (resolve, reject) => {
            try {
                const admin = await Admin.findOne({ email })
                resolve(admin as IAdmin)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}