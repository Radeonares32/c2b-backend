//! Dal
import { SlideDal } from '../dal/slide.dal'

//? Validation
import { validation } from '../../../validations/validations'

//* Security
import { security } from '../../../security/security'
export class SlideService {
    private SlideDataAcess: SlideDal = new SlideDal()
    slideFindAll() {
        return this.SlideDataAcess.findAll()
    }
    slideFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                slide: this.SlideDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    slideDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.SlideDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    slideUpdate(id: string, header: string, text: string, image: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            if (id && header) {
                return {
                    update: this.SlideDataAcess.update(id, header, text, image)
                }
            }
            else {
                return {
                    message: "id or header prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async slideCreate(header: string, text: string, image: string) {
        if (header) {
            return {
                create: this.SlideDataAcess.create(header, text, image),
            }
        }
        else {
            return {
                message: "header prop empty"
            }
        }

    }
}