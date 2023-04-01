//! Dal
import { AnnouncementDal } from '../dal/announcement.dal'

//? Validation
import { validation } from '../../../validations/validations'

export class AnnouncementService {
    private announcementDataAcess: AnnouncementDal = new AnnouncementDal()
    constructor(private id?: string, private title?: string, private image?: string) {
        this.id = id
        this.title = title
        this.image = image
    }
    announcementFindAll() {
        return this.announcementDataAcess.findAll()
    }
    announcementFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                announcement: this.announcementDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    announcementDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.announcementDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    announcementUpdate(id: string, title: string, image: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            if (title) {
                return {
                    update: this.announcementDataAcess.update(id, title, image)
                }
            }
            else {
                return {
                    message: "title or image prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async announcementCreate(title: string, image: string) {
        if (title) {
            return {
                create: this.announcementDataAcess.create(title, image)
            }
        }
        else {
            return {
                message: "title prop empty"
            }
        }

    }
}