//! Dal
import { PrivacyDal } from '../dal/privacy.dal'

//? Validation
import { validation } from '../../../validations/validations'

//* Security
import { security } from '../../../security/security'
export class Privacy {
    private privacyDataAcess: PrivacyDal = new PrivacyDal()
    privacyFindAll() {
        return this.privacyDataAcess.findAll()
    }
    privacyFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                privacy: this.privacyDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    privacyDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.privacyDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    privacyUpdate(id: string, title: string, context: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            if (id && context) {
                return {
                    update: this.privacyDataAcess.update(id, title, context)
                }
            }
            else {
                return {
                    message: "id or title prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async privacyCreate(title:string,context:string) {
        if (title) {
            return {
                create: this.privacyDataAcess.create(title,context),
            }
        }
        else {
            return {
                message: "title prop empty"
            }
        }

    }
}