import { model, Schema } from 'mongoose'

//! Entity
import { IAnnouncement } from '../entity/announcement.entity'

const AnnouncementSchema = new Schema<IAnnouncement>({
    title: {
        type: String
    },
    image: {
        type: String
    }
})
export const Announcement = model('Announcement', AnnouncementSchema)