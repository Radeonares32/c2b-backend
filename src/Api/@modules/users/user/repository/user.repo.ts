import { IUser } from '../../dtos/IUsers'
export interface UserRepository {
    create(name: string, surname: string, email: string,image:string,phone:string,password:string,dateOfBirth:string,gender:string,roles:string,basket:string,order:string,creditCardName:string,creditCardSurname:string,creditCardNumber:string,creditCardCvv:string,city:string,country:string,address:string,zipCode:string,expireMonth:string,expireYear:string,identityNumber:string): Promise<{ message: string }>
    find(id: string): Promise<IUser>
    findAll(): Promise<IUser[]>
    update(id: string, name: string, surname: string, email: string,image:string,phone:string,password:string,dateOfBirth:string,gender:string,roles:string,basket:string,order:string,creditCardName:string,creditCardSurname:string,creditCardNumber:string,creditCardCvv:string,city:string,country:string,address:string,zipCode:string,expireMonth:string,expireYear:string,identityNumber:string): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
}