//! Dto
import { IUser } from '../../dtos/IUsers'

export interface Iinstitutional extends IUser {
    companyName: string,
    position: string,
    activityField: string
    businessType: string
    taxOffice: string
    identity: number
    companyAddress: string
    district: string
    service: string
}
