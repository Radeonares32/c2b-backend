//! Dal
import { OurServicenDal } from '../dal/ourService.dal'

//? Validation
import { validation } from '../../../validations/validations'

//* Security
import { security } from '../../../security/security'
export class OurService {
    private ourServiceDataAcess: OurServicenDal = new OurServicenDal()
    ourServiceFindAll() {
        return this.ourServiceDataAcess.findAll()
    }
    ourServiceFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                ourService: this.ourServiceDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    ourServiceDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.ourServiceDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    ourServiceUpdate(id: string, link: string, text: string, title: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            if (id && link) {
                return {
                    update: this.ourServiceDataAcess.update(id, link, text, title)
                }
            }
            else {
                return {
                    message: "id or link prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async ourServiceCreate(link: string, text: string, title: string) {
        if (link) {
            return {
                create: this.ourServiceDataAcess.create(link, text, title),
            }
        }
        else {
            return {
                message: "link prop empty"
            }
        }

    }
}