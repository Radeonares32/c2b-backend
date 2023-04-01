//? Repository
import { MenuRepository } from '../repository/menu.repo'

//? Entity
import { IMenu } from '../entity/IMenu'

//? Models
import { Menu } from '../models/menu.models'

export class MenuDal implements MenuRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Menu.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(name: string, type: string, status: boolean): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await Menu.create({ name, type, status })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IMenu> {
        return new Promise(async (resolve, reject) => {
            try {
                const menu = await Menu.findById(id)
                resolve(menu as IMenu)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IMenu[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const menu = await Menu.find()
                resolve(menu as IMenu[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, name: string, type: string, status: boolean): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const menu = await Menu.findByIdAndUpdate(id, { name, type, status })
                menu?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}