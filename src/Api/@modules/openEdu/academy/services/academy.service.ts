//! Dal
import { AcademyDal } from '../dal/academy.dal'

//? Validation
import { validation } from '../../../../validations/validations'

//* Security
import { security } from '../../../../security/security'
export class AcademyService {
    private AcademyDataAcess: AcademyDal = new AcademyDal()
    AcademyFindAll() {
        return this.AcademyDataAcess.findAll()
    }
    AcademyFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                academy: this.AcademyDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    AcademyDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.AcademyDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    AcademyUpdate(id: string, icon: [{ src: string; context: string; }]) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {

            if (id && icon) {
                return {
                    update: this.AcademyDataAcess.update(id, icon)
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
    async AcademyCreate(icon: [{ src: string; context: string; }]) {
        if (icon) {
            return {
                create: this.AcademyDataAcess.create(icon),
            }
        }
        else {
            return {
                message: "icon prop empty"
            }
        }

    }
}