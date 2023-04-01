import { Types } from 'mongoose'
//! Dal
import { OpenEduDal } from '../dal/openEdu.dal'

//? Validation
import { validation } from '../../../../validations/validations'

//* Security
import { security } from '../../../../security/security'
export class OpenEduService {
    private openEduDataAcess: OpenEduDal = new OpenEduDal()
    openEduFindAll() {
        return this.openEduDataAcess.findAll()
    }
    openEduFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                openEdu: this.openEduDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    openEduDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                delete: this.openEduDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    openEduUpdate(id: string, name: string, description: string, thumbnailImage: string, html: string, date: string, status: boolean, category: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            const categoryId = new Types.ObjectId(category)
            return {
                update: this.openEduDataAcess.update(id, name, description, thumbnailImage, html, date, status, categoryId)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async openEduCreate(name: string, description: string, thumbnailImage: string, html: string, date: string, status: boolean, category: string) {
        if (name) {
            const categoryId = new Types.ObjectId(category)
            return {
                create: this.openEduDataAcess.create(name, description, thumbnailImage, html, date, status, categoryId),
            }
        }
        else {
            return {
                message: "prop not valid"
            }
        }

    }
}