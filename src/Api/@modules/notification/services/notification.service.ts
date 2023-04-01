//! Dal
import { NotificationDal } from '../dal/notification.dal'

//? Validation
import { validation } from '../../../validations/validations'

export class NotificationService {
    private notificationDataAcess: NotificationDal = new NotificationDal()
    notificationFindAll() {
        return this.notificationDataAcess.findAll()
    }
    notificationFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                notification: this.notificationDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    notificationDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.notificationDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    notificationUpdate(id: string, title: string, context: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                update: this.notificationDataAcess.update(id, title, context)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async notificationCreate(title: string, context: string) {
        if (title) {
            return {
                create: this.notificationDataAcess.create(title, context),
            }
        }
        else {
            return {
                message: "title prop empty"
            }
        }

    }
}