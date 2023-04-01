//! Dal
import { institutionalDal } from '../dal/institutional.dal'

//? Validation
import { validation } from '../../../../validations/validations'

//* Security
import { security } from '../../../../security/security'

//* Cache
import { cache } from '../../../../cache/cache'

export class InstitutionalService {
    private institutionalDataAcess: institutionalDal = new institutionalDal()
    institutionalFindAll() {
        return this.institutionalDataAcess.findAll()
    }
    async institutionalFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                user: await this.institutionalDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    institutionalDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.institutionalDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    institutionalUpdate(id: string, name: string,oldPassword:string,hash:string,newPassword:string, surname: string, email: string, image: string, phone: string, password: string, dateOfBirth: string, gender: string, basket: string, order: string, creditCardName: string, creditCardSurname: string, creditCardNumber: string, creditCardCvv: string, city: string, country: string, address: string, zipCode: string, expireMonth: string, expireYear: string, companyName: string, position: string, activityField: string, businessType: string, taxOffice: string, identity: number, companyAddress: string, district: string, service: string) {
        const isValidId = validation.isIdValidation(id)
        const isEmail = validation.isEmailValidation(email)
        const decrypt = security.bcrypt.dencrypt(oldPassword, hash)
        if (isValidId.isValid) {
            if (isEmail.isEmail) {
                if (decrypt.isDencrypt) {
                    const encrypt = security.bcrypt.encrypt(newPassword)
                    return {
                        update: this.institutionalDataAcess.update(id,name,surname,email,image,phone,encrypt,dateOfBirth,gender,basket,order,creditCardName,creditCardSurname,creditCardNumber,creditCardCvv,city,country,address,zipCode,expireMonth,expireYear,companyName,position,activityField,businessType,taxOffice,identity,companyAddress,district,service)
                    }
                }
                else {
                    return {
                        message: decrypt.message
                    }

                }

            }
            else {
                return {
                    message: isEmail.message
                }
            }

        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async institutionalCreate(name: string, surname: string, email: string, image: string, phone: string, password: string, dateOfBirth: string, gender: string, basket: string, order: string, creditCardName: string, creditCardSurname: string, creditCardNumber: string, creditCardCvv: string, city: string, country: string, address: string, zipCode: string, expireMonth: string, expireYear: string, companyName: string, position: string, activityField: string, businessType: string, taxOffice: string, identity: number, companyAddress: string, district: string, service: string) {
        const hash = security.bcrypt.encrypt(password)
        const isEmail = validation.isEmailValidation(email)
        if (isEmail.isEmail) {
            return {
                create: this.institutionalDataAcess.create(name,surname,email,image,phone,hash,dateOfBirth,gender,basket,order,creditCardName,creditCardSurname,creditCardNumber,creditCardCvv,city,country,address,zipCode,expireMonth,expireYear,companyName,position,activityField,businessType,taxOffice,identity,companyAddress,district,service)
            }
        }
        else {
            return {
                message: "email not valid"
            }
        }
    }
    async institutionalFollow(follow: string, followers: string) {
        if (follow || followers) {
            return {
                follow: this.institutionalDataAcess.follow(follow, followers),
            }
        }
        else {
            return {
                message: "follow || followers prop empty"
            }
        }
    }
    async institutionalUnFollow(follow: string, followers: string) {
        if (follow || followers) {
            return {
                follow: this.institutionalDataAcess.unFollow(follow, followers),
            }
        }
        else {
            return {
                message: "follow || followers prop empty"
            }
        }
    }
    async institutionalGetFollow(id: string) {
        if (id) {
            return {
                follow: await this.institutionalDataAcess.getFollow(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async institutionalGetFollowers(id: string) {
        if (id) {
            return {
                followers: await this.institutionalDataAcess.getFollowers(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async institutionalAddBasket(id: string, basket: any) {
        const userBasket = security.crypto.cryen(basket)
        if (userBasket) {
            return {
                basket: await this.institutionalDataAcess.addBasket(id, userBasket.toString()),
            }
        }
        else {
            return {
                message: "id basket prop empty"
            }
        }
    }
    async institutionalGetBasket(id: string) {
        if (id) {
            return {
                basket: await this.institutionalDataAcess.getBasket(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async institutionalAddOrder(id: string, order: any) {
        const userOrder = security.crypto.cryen(order)
        if (userOrder) {
            return {
                order: await this.institutionalDataAcess.addOrder(id, userOrder.toString()),
            }
        }
        else {
            return {
                message: "id order prop empty"
            }
        }
    }
    async institutionalGetOrder(id: string) {
        if (id) {
            return {
                order: await this.institutionalDataAcess.getOrder(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async institutionalGetRoles() {
        return this.institutionalDataAcess.getRoles()
    }
    async institutionalGetRole(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                role: await this.institutionalDataAcess.getRole(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async institutionalAddRoles(name: string) {
        if (name) {
            return {
                roles: await this.institutionalDataAcess.addRoles(name),
            }
        }
        else {
            return {
                message: "name prop empty"
            }
        }
    }
    async institutionalUpdateRole(id: string, name: string) {
        if (id && name) {
            return {
                role: await this.institutionalDataAcess.updateRoles(id, name),
            }
        }
        else {
            return {
                message: "id name prop empty"
            }
        }
    }
    async institutionalDeleteRoles(id: string) {
        if (id) {
            return {
                userRoles: await this.institutionalDataAcess.deleteRoles(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async institutionalRelAddRoles(userId: string, roleId: string) {
        if (userId || roleId) {
            return {
                userRoles: await this.institutionalDataAcess.addUserRole(userId, roleId),
            }
        }
        else {
            return {
                message: "userId roleId prop empty"
            }
        }
    }
    async institutionalRelDeleteRoles(userId: string, roleId: string) {
        if (userId || roleId) {
            return {
                userRoles: await this.institutionalDataAcess.deleteUserRole(userId, roleId),
            }
        }
        else {
            return {
                message: "userId roleId prop empty"
            }
        }
    }
    async institutionalGetUserRole(id: string) {
        if (id) {
            return {
                userRoles: await this.institutionalDataAcess.getUserRole(id),
            }
        }
        else {
            return {
                message: "id roleId prop empty"
            }
        }
    }
    async institutionalGetRoleUser(id: string) {
        if (id) {
            return {
                userRoles: await this.institutionalDataAcess.getRoleUser(id),
            }
        }
        else {
            return {
                message: "id roleId prop empty"
            }
        }
    }
    async institutionalFindEmail(email: string) {
        if (email) {
            return {
                userEmail: await this.institutionalDataAcess.getUserEmail(email),
            }
        }
        else {
            return {
                message: "id roleId prop empty"
            }
        }
    }
    async institutionalSign(email: string, password: string) {
        const isEmail = validation.isEmailValidation(email)
        if (isEmail.isEmail) {
            const isUser: any = await this.institutionalDataAcess.getUserEmail(email)
            if (isUser.length > 0) {
                const isHashTrue = security.bcrypt.dencrypt(password, isUser[0][1])
                if (isHashTrue.isDencrypt) {
                    const payload = {
                        email: isUser[0][0]
                    }
                    try {
                        return {
                            token: (await cache.redis.Token.addToken(payload)).token
                        }

                    } catch {
                        return {
                            token: security.jwt.payload.signPayload(payload).err
                        }
                    }
                }
                else {
                    return {
                        sign: isHashTrue.message
                    }
                }
            }
            else {
                return {
                    sign: "users not fount"
                }
            }
        }
        else {
            return {
                sign: isEmail.message
            }
        }
    }
    async institutionalLogout(token: string) {
        try {
            const delToken = await cache.redis.Token.deleteToken(token)
            if (delToken.message) {
                return {
                    message: delToken.message
                }
            }
            else {
                return {
                    message: delToken.status
                }

            }
        }
        catch (err) {
            return {
                message: err
            }
        }
    }
    async institutionalPayment(id:string) {
        if (id) {
            return {
                payment: await this.institutionalDataAcess.payment(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async institutionalChatSendMessage(userId:any,otherUserId:any) {
        if (userId && otherUserId) {
            return {
                chat: await this.institutionalDataAcess.chatSendMessage(userId,otherUserId),
            }
        }
        else {
            return {
                message: "userId otherUserId prop empty"
            }
        }
    }
    async institutionalChatJoinRoom(userId:any,otherUserId:any) {
        if (userId && otherUserId) {
            return {
                chat: await this.institutionalDataAcess.chatJoinRoom(userId,otherUserId),
            }
        }
        else {
            return {
                message: "userId otherUserId prop empty"
            }
        }
    }
    async institutionalFindRoomId(userId:any,otherUserId:any) {
        if (userId && otherUserId) {
            return {
                chat: await this.institutionalDataAcess.chatFindRoom(userId,otherUserId),
            }
        }
        else {
            return {
                message: "userId otherUserId prop empty"
            }
        }
    }
    async institutionalFindRoomName(userId:any,otherUserId:any) {
        if (userId && otherUserId) {
            return {
                chat: await this.institutionalDataAcess.chatFindRoomName(userId,otherUserId),
            }
        }
        else {
            return {
                message: "userId otherUserId prop empty"
            }
        }
    }
}