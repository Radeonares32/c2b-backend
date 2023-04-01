//! Dal
import { CategoryMainDal } from '../dal/categoryMain.dal'

//? Validation
import { validation } from '../../../../validations/validations'
 
export class CategoryMainService {
    private categoryMainDataAcess: CategoryMainDal = new CategoryMainDal()
    constructor(private id?: string, private title?: string) {
        this.id = id
        this.title = title
    }
    categoryMainFindAll() {
        return this.categoryMainDataAcess.findAll()
    }
    categoryMainFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                category: this.categoryMainDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    categoryMainDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.categoryMainDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    categoryMainUpdate(id: string, title: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                update: this.categoryMainDataAcess.update(id, title)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async categoryMainCreate(title: string) {
        if (title) {
            return {
                create: this.categoryMainDataAcess.create(title),
            }
        }
        else {
            return {
                message: "title prop empty"
            }
        }

    }
}