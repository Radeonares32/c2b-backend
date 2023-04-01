//! Dal
import { BlogMainDal } from '../dal/blogMain.dal'

//? Validation
import { validation } from '../../../validations/validations'

//* Security
import { security } from '../../../security/security'
export class BlogMainService {
    private blogMainDataAcess: BlogMainDal = new BlogMainDal()
    blogMainFindAll() {
        return this.blogMainDataAcess.findAll()
    }
    blogMainFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                blogMain: this.blogMainDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    blogMainDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.blogMainDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    blogMainUpdate(id:string,image: string,pageImage:string, title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ src: string; context: string; }],questions: [{ question: string; context: string; }]) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            const decryptHtml = security.crypto.cryde(html)
            const decryptQuestion = security.crypto.cryde(questions)
            if (decryptHtml && decryptQuestion) {
                return {
                    update: this.blogMainDataAcess.update(id,image,pageImage,title,text,description,decryptHtml,icon,decryptQuestion)
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
    async blogMainCreate(image: string,pageImage:string, title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ src: string; context: string; }],questions: [{ question: string; context: string; }]) {
        const decryptHtml = security.crypto.cryde(html)
        const decryptQuestion = security.crypto.cryde(questions)
        if (decryptHtml) {
            return {
                create: this.blogMainDataAcess.create(image,pageImage,title,text,description,decryptHtml,icon,decryptQuestion),
            }
        }
        else {
            return {
                message: "html prop empty"
            }
        }

    }
}