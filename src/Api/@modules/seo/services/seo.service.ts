//! Dal
import { SeoDal } from '../dal/seo.dal'

//? Validation
import { validation } from '../../../validations/validations'

export class SeoService {
    private seoDataAcess: SeoDal = new SeoDal()
    constructor(private id?: string, private title?: string, private description?: string, private keywords?: string) {
        this.id = id
        this.title = title
        this.description = description
        this.keywords = keywords
    }
    seoFindAll() {
        return this.seoDataAcess.findAll()
    }
    seoFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                seo: this.seoDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    seoDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.seoDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    seoUpdate(id: string, title: string, description: string, keywords: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            if (title) {
                return {
                    update: this.seoDataAcess.update(id, title, description, keywords)
                }
            }
            else {
                return {
                    message: "title prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async seoCreate(title: string, description: string, keywords: string) {
        if (title) {
            return {
                create: this.seoDataAcess.create(title, description, keywords)
            }
        }
        else {
            return {
                message: "title prop empty"
            }
        }

    }
}