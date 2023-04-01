//! Dal
import { DiscoveredUsDal } from '../dal/discoveredUs.dal'

//? Validation
import { validation } from '../../../validations/validations'

export class  DiscoveredUsService {
    private discoveredUsDataAcess: DiscoveredUsDal = new DiscoveredUsDal()
    discoveredUsFindAll() {
        return this.discoveredUsDataAcess.findAll()
    }
    discoveredUsFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                discoveredUs: this.discoveredUsDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    discoveredUsDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.discoveredUsDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    discoveredUsUpdate(id: string, address: string, email: string, phone: string,instagram: string, facebook: string, linkedin: string,mapLink:string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            if (address) {
                return {
                    update: this.discoveredUsDataAcess.update(id,  address,email,phone,instagram,facebook,linkedin,mapLink)
                }
            }
            else {
                return {
                    message: "address prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async discoveredUsCreate(address: string, email: string, phone: string,instagram: string, facebook: string, linkedin: string,mapLink:string) {
        if (address) {
            return {
                create: this.discoveredUsDataAcess.create( address,email,phone,instagram,facebook,linkedin,mapLink)
            }
        }
        else {
            return {
                message: "address prop empty"
            }
        }

    }
}