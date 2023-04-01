import { model, Schema } from 'mongoose'

//! Entity
import { IDiscoveredUs } from '../entity/IDiscoveredUs.entity'

const DiscoveredUsSchema = new Schema<IDiscoveredUs>({
    address: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    instagram: {
        type: String
    },
    facebook: {
        type: String
    },
    linkedin: {
        type: String
    },
    mapLink: {
        type: String
    }
})
export const DiscoveredUs = model('DiscoveredUs', DiscoveredUsSchema)