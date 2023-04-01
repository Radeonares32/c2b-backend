//! Dal
import { MenuDal } from '../dal/menu.dal'

//? Validation
import { validation } from '../../../validations/validations'

export class MenuService {
    private menuDataAcess: MenuDal = new MenuDal()
    constructor(private id?: string, private name?: string, private type?: string, private status?: boolean) {
        this.id = id
        this.name = name
        this.type = type
        this.status = status
    }
    menuFindAll() {
        return this.menuDataAcess.findAll()
    }
    menuFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                menu: this.menuDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    menuDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.menuDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    menuUpdate(id: string, name: string, type: string, status: boolean) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            if (name) {
                return {
                    update: this.menuDataAcess.update(id, name, type, status)
                }
            }
            else {
                return {
                    message: "name prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async menuCreate(name: string, type: string, status: boolean) {
        if (name) {
            return {
                create: this.menuDataAcess.create(name, type, status)
            }
        }
        else {
            return {
                message: "name prop empty"
            }
        }

    }
}