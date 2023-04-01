//! Dal
import { SolutionDal } from '../dal/solutionMain.dal'

//? Validation
import { validation } from '../../../validations/validations'

//* Security
import { security } from '../../../security/security'
export class SolutionMainService {
    private solutionMainDataAcess: SolutionDal = new SolutionDal()
    solutionMainFindAll() {
        return this.solutionMainDataAcess.findAll()
    }
    solutionMainFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                solutionMain: this.solutionMainDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    solutionMainDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.solutionMainDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    solutionMainUpdate(id:string,image: string,pageImage:string, title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ src: string; context: string; }],questions: [{ question: string; context: string; }]) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            const decryptHtml = security.crypto.cryde(html)
            const decryptQuestion = security.crypto.cryde(questions)
            if (decryptHtml && decryptQuestion) {
                return {
                    update: this.solutionMainDataAcess.update(id,image,pageImage,title,text,description,decryptHtml,icon,decryptQuestion)
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
    async solutionMainCreate(image: string,pageImage:string, title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ src: string; context: string; }],questions: [{ question: string; context: string; }]) {
        const decryptHtml = security.crypto.cryde(html)
        const decryptQuestion = security.crypto.cryde(questions)
        if (decryptHtml) {
            return {
                create: this.solutionMainDataAcess.create(image,pageImage,title,text,description,decryptHtml,icon,decryptQuestion),
            }
        }
        else {
            return {
                message: "html prop empty"
            }
        }

    }
}