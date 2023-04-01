//! Dal
import { CategoryDal } from '../dal/category.dal'

//? Validation
import { validation } from '../../../../validations/validations'

export class CategoryService {
    private categoryDataAcess: CategoryDal = new CategoryDal()
    constructor(private id?: string, private title?: string) {
        this.id = id
        this.title = title
    }
    categoryFindAll() {
        return this.categoryDataAcess.findAll()
    }
    categoryFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                category: this.categoryDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    categoryDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                delete: this.categoryDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    categoryUpdate(id: string, title: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                update: this.categoryDataAcess.update(id, title)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async categoryCreate(title: string) {
        if (title) {
            return {
                create: this.categoryDataAcess.create(title),
            }
        }
        else {
            return {
                message: "prop not valid"
            }
        }

    }
}