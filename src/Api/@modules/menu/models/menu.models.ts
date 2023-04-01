import { model, Schema } from 'mongoose'

//! Entity
import { IMenu } from '../entity/IMenu'

const MenuSchema = new Schema<IMenu>({
    name: {
        type: String
    },
    type: {
        type: String
    },
    status: {
        type: Boolean
    }
})
export const Menu = model('Menu', MenuSchema)