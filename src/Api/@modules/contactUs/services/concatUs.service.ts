//! Dal
import { ConcatUsDal } from '../dal/concatUs.dal'

//? Validation
import { validation } from '../../../validations/validations'

export class ConcatUsService {
    private concatUSDataAccess: ConcatUsDal = new ConcatUsDal()
    constructor(private id?: string, private address?: string, private email?: string, private phone?: string,private instagram?:string,private facebook?:string,private linkedin?:string,private mapLink?:string) {
        this.id = id
        this.address = address
        this.email = email
        this.phone = phone
        this.instagram = instagram
        this.facebook = facebook
        this.linkedin = linkedin
        this.mapLink = mapLink
    }
    concatUsFindAll() {
        return this.concatUSDataAccess.findAll()
    }
    concatUsFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid) {
            return {
                concatUs: this.concatUSDataAccess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    concatUsDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid) {
            return {

                delete: this.concatUSDataAccess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    concatUsUpdate(id: string, address: string, email: string, phone: string,instagram:string,facebook:string,linkedin:string,mapLink:string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid) {
            if (id) {
                return {
                    update: this.concatUSDataAccess.update(id,address,email,phone,instagram,facebook,linkedin,mapLink)
                }
            }
            else {
                return {
                    message: "id prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async concatUsCreate(address: string, email: string, phone: string,instagram:string,facebook:string,linkedin:string,mapLink:string) {
        if (email) {
            return {
                create: this.concatUSDataAccess.create(address,email,phone,instagram,facebook,linkedin,mapLink)
            }
        }
        else {
            return {
                message: "email prop empty"
            }
        }

    }
}