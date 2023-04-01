import { model, Schema } from 'mongoose'

//! Entity
import { INotification } from '../entity/INotification'

const NotificationSchema = new Schema<INotification>({
    title: {
        type: String
    },
    context: {
        type: String
    }
})
export const Notification = model('Notification', NotificationSchema)