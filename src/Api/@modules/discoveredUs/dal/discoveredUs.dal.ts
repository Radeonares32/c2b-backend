//? Repository
import { DiscoveredUsRepository } from '../repository/discoveredUs.repo'

//? Entity
import { IDiscoveredUs } from '../entity/IDiscoveredUs.entity'

//? Models
import { DiscoveredUs } from '../models/discoveredUs.models'

export class DiscoveredUsDal implements DiscoveredUsRepository {
    async delete(id: string): Promise<{ message: string }> {
        await DiscoveredUs.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(address: string, email: string, phone: string,instagram: string, facebook: string, linkedin: string,mapLink:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await DiscoveredUs.create({address,email,phone,instagram,facebook,linkedin,mapLink })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IDiscoveredUs> {
        return new Promise(async (resolve, reject) => {
            try {
                const discoveredUs = await DiscoveredUs.findById(id)
                resolve(discoveredUs as IDiscoveredUs)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IDiscoveredUs[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const discoveredUs = await DiscoveredUs.find()
                resolve(discoveredUs as IDiscoveredUs[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, address: string, email: string, phone: string,instagram: string, facebook: string, linkedin: string,mapLink:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const discoveredUs = await DiscoveredUs.findByIdAndUpdate(id, { address,email,phone,instagram,facebook,linkedin,mapLink })
                discoveredUs?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}