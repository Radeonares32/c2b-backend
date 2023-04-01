//! Dal
import { ContactDal } from '../dal/contact.dal'

//? Validation
import { validation } from '../../../validations/validations'

export class ContactService {
    private contactDataAcess: ContactDal = new ContactDal()
    constructor(private id?: string, private name?: string, private surname?: string, private email?: string, private address?: string) {
        this.id = id
        this.name = name
        this.email = email
        this.address = address
    }
    contactFindAll() {
        return this.contactDataAcess.findAll()
    }
    contactFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                contact: this.contactDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    contactDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.contactDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    contactUpdate(id: string, name: string, surname: string, email: string,address:string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            if (name) {
                return {
                    update: this.contactDataAcess.update(id, name, surname, email,address)
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
    async contactCreate(name: string, surname: string, email: string,address:string) {
        if (name) {
            return {
                create: this.contactDataAcess.create(name, surname, email,address)
            }
        }
        else {
            return {
                message: "name prop empty"
            }
        }

    }
}