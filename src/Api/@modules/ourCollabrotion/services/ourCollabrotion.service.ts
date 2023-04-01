//! Dal
import { OurCollabrotionDal } from '../dal/ourCollabrotion.dal'

//? Validation
import { validation } from '../../../validations/validations'

//* Security
import { security } from '../../../security/security'
export class OurCollabrotionService {
    private ourCollabrotionDataAcess: OurCollabrotionDal = new OurCollabrotionDal()
    ourCollabrotionFindAll() {
        return this.ourCollabrotionDataAcess.findAll()
    }
    ourCollabrotionFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                ourCollabrotion: this.ourCollabrotionDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    ourCollabrotionDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.ourCollabrotionDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    ourCollabrotionUpdate(id: string, link: string, image: string, text: string, title: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            if (id && link) {
                return {
                    update: this.ourCollabrotionDataAcess.update(id, link, image, text, title)
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
    async ourCollabrotionCreate(link: string, image: string, text: string, title: string) {
        if (link) {
            return {
                create: this.ourCollabrotionDataAcess.create(link, image, text, title),
            }
        }
        else {
            return {
                message: "link prop empty"
            }
        }

    }
}