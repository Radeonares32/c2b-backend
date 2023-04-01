//! Dal
import { BlogDal } from '../dal/blog.dal'

//? Validation
import { validation } from '../../../validations/validations'

//* Security
import { security } from '../../../security/security'
export class BlogService {
    private blogDataAcess: BlogDal = new BlogDal()
    blogFindAll() {
        return this.blogDataAcess.findAll()
    }
    blogFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                blog: this.blogDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    blogDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.blogDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    blogUpdate(id:string,image: string, title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ src: string; context: string; }],questions: [{ question: string; context: string; }]) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            const decryptHtml = security.crypto.cryde(html)
            const decryptQuestion = security.crypto.cryde(questions)
            if (decryptHtml && decryptQuestion) {
                return {
                    update: this.blogDataAcess.update(id,image,title,text,description,decryptHtml,icon,decryptQuestion)
                }
            }
            else {
                return {
                    message: "html or Question prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async blogCreate(image: string, title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ src: string; context: string; }],questions: [{ question: string; context: string; }]) {
        const decryptHtml = security.crypto.cryde(html)
        const decryptQuestion = security.crypto.cryde(questions)
        if (decryptHtml) {
            return {
                create: this.blogDataAcess.create(image,title,text,description,decryptHtml,icon,decryptQuestion),
            }
        }
        else {
            return {
                message: "html prop empty"
            }
        }

    }
}