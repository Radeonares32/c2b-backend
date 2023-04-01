//! Dal
import { AboutMainDal } from '../dal/aboutMain.dal'

//? Validation
import { validation } from '../../../validations/validations'

//* Security
import { security } from '../../../security/security'
export class AboutMainService {
    private aboutMainDataAcess: AboutMainDal = new AboutMainDal()
    constructor(private id?: string, private title?: string, private html?: [{ title: string, context: string }], private image?: string) {
        this.id = id
        this.image = image
        this.title = title
        this.html = html
    }
    aboutMainFindAll() {
        return this.aboutMainDataAcess.findAll()
    }
    aboutMainFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                about: this.aboutMainDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    aboutMainDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.aboutMainDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    aboutMainUpdate(id: string, title: string, html: string, image: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            const decryptHtml = security.crypto.cryde(html)
            if (decryptHtml) {
                return {
                    update: this.aboutMainDataAcess.update(id, title, decryptHtml, image)
                }
            }
            else {
                return {
                    message: "html or icon prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async aboutMainCreate(title: string, html: string, image: string) {
        const decryptHtml = security.crypto.cryde(html)
        if (decryptHtml) {
            return {
                create: this.aboutMainDataAcess.create(title, decryptHtml, image),
            }
        }
        else {
            return {
                message: "html  prop empty"
            }
        }

    }
}