//! Dal
import { ContactFormDal } from '../dal/contactForm.dal'

//? Validation
import { validation } from '../../../validations/validations'

export class ContactFormService {
    private contactFormDataAcess: ContactFormDal = new ContactFormDal()
    contactFormFindAll() {
        return this.contactFormDataAcess.findAll()
    }
    contactFormFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                contactForm: this.contactFormDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    contactFormDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.contactFormDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    contactFormUpdate(id: string, name: string, surname: string, email: string,companyName: string, message: string, type: number,isAccept:boolean) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            if (name) {
                return {
                    update: this.contactFormDataAcess.update(id,  name,surname,email,companyName,message,type,isAccept)
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
    async contactFormCreate(name: string, surname: string, email: string,companyName: string, message: string, type: number,isAccept:boolean) {
        if (name) {
            return {
                create: this.contactFormDataAcess.create( name,surname,email,companyName,message,type,isAccept)
            }
        }
        else {
            return {
                message: "name prop empty"
            }
        }

    }
}