//! Dal
import { MainDal } from '../dal/main.dal'

//? Validation
import { validation } from '../../../../validations/validations'

//* Security
import { security } from '../../../../security/security'
export class MainService {
    private MainDataAcess: MainDal = new MainDal()
    MainFindAll() {
        return this.MainDataAcess.findAll()
    }
    MainFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                main: this.MainDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    MainDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.MainDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    MainUpdate(id:string,icon: [{ src: string; context: string; }]) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            
            if (id && icon) {
                return {
                    update: this.MainDataAcess.update(id,icon)
                }
            }
            else {
                return {
                    message: "id or icon prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async MainCreate( icon: [{ src: string; context: string; }]) {
        if (icon) {
            return {
                create: this.MainDataAcess.create(icon),
            }
        }
        else {
            return {
                message: "icon prop empty"
            }
        }

    }
}