import { model, Schema } from 'mongoose'

//! Entity
import { IAcademy } from '../entity/IAcademy.entity'

const OpenEduAcademySchema = new Schema<IAcademy>({
    icon: {
        type: [{ src: String, context: String }]
    },

})
export const Academy = model('OpenEduAcademy', OpenEduAcademySchema)