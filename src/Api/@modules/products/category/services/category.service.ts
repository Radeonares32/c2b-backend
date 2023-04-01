import { Types } from 'mongoose'

//! Dal
import { CategoryDal } from '../dal/category.dal'

//? Validation
import { validation } from '../../../../validations/validations'

export class CategoryService {
    private categoryDataAcess: CategoryDal = new CategoryDal()
    constructor(private id?: string, private title?: string, private categoryMain?: string) {
        this.id = id
        this.title = title
        this.categoryMain = categoryMain
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
    categoryUpdate(id: string, title: string, categoryMain: string) {
        const isValidId = validation.isIdValidation(id)
        const objectId = new Types.ObjectId(categoryMain)
        if (isValidId.isValid === true) {
            return {
                update: this.categoryDataAcess.update(id, title, objectId)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async categoryCreate(title: string, categoryMain: string) {
        if (title) {
            const objectId = new Types.ObjectId(categoryMain)
            return {
                create: this.categoryDataAcess.create(title, objectId),
            }
        }
        else {
            return {
                message: "title prop empty"
            }
        }

    }
}