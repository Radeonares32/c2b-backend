import { Types } from 'mongoose'
//! Dal
import { ProjectConsultantDal } from '../dal/projectConsultant.dal'

//? Validation
import { validation } from '../../../../validations/validations'

//* Security
import { security } from '../../../../security/security'
export class ProjectConsultantService {
    private projectConsultantDataAcess: ProjectConsultantDal = new ProjectConsultantDal()
    constructor(private id?: string, private title?: string, private subTitle?: string, private text?: string, private image?: string,  private category?: string) {
        this.id = id
        this.title = title
        this.subTitle = subTitle
        this.text = text
        this.image = image
        this.category = category
    }
    projectConsultantFindAll() {
        return this.projectConsultantDataAcess.findAll()
    }
    projectConsultantFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                projectConsultant: this.projectConsultantDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    projectConsultantDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                delete: this.projectConsultantDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    projectConsultantUpdate(id: string, title: string, subTitle: string, text: string,image:string, category: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            const categoryId = new Types.ObjectId(category)
            return {
                update: this.projectConsultantDataAcess.update(id, title, subTitle, text, image,categoryId)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async projectConsultantCreate(title: string, subTitle: string, text: string,image:string, category: string) {
        if (title) {
            const categoryId = new Types.ObjectId(category)
            return {
                create: this.projectConsultantDataAcess.create(title, subTitle, text, image,categoryId),
            }
        }
        else {
            return {
                message: "prop not valid"
            }
        }

    }
}