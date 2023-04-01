//! Dal
import { UserDal } from '../dal/user.dal'

//? Validation
import { validation } from '../../../../validations/validations'

//* Security
import { security } from '../../../../security/security'

//* Cache
import { cache } from '../../../../cache/cache'

export class UserService {
    private userDataAcess: UserDal = new UserDal()
    userFindAll() {
        return this.userDataAcess.findAll()
    }
    async userFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                user: await this.userDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    userDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.userDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    userUpdate(id: string, name: string, surname: string, email: string, image: string, phone: string, hash: string, oldPassword: string, newPassword: string, dateOfBirth: string, gender: string, basket: string, order: string, creditCardName: string, creditCardSurname: string, creditCardNumber: string, creditCardCvv: string, city: string, country: string, address: string, zipCode: string,expireMonth:string,expireYear:string,identityNumber:string) {
        const isValidId = validation.isIdValidation(id)
        const isEmail = validation.isEmailValidation(email)
        const decrypt = security.bcrypt.dencrypt(oldPassword, hash)
        if (isValidId.isValid) {
            if (isEmail.isEmail) {
                if (decrypt.isDencrypt) {
                    const encrypt = security.bcrypt.encrypt(newPassword)
                    return {
                        update: this.userDataAcess.update(id, name, surname, email, image, phone, encrypt, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv, city, country, address, zipCode,expireMonth,expireYear,identityNumber)
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
    async userCreate(name: string, surname: string, email: string, image: string, phone: string, password: string, dateOfBirth: string, gender: string, basket: string, order: string, creditCardName: string, creditCardSurname: string, creditCardNumber: string, creditCardCvv: string, city: string, country: string, address: string, zipCode: string,expireMonth:string,expireYear:string,identityNumber:string) {
        const hash = security.bcrypt.encrypt(password)
        const isEmail = validation.isEmailValidation(email)
        if (isEmail.isEmail) {
            return {
                create: this.userDataAcess.create(name, surname, email, image, phone, hash, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv, city, country, address, zipCode,expireMonth,expireYear,identityNumber),
            }
        }
        else {
            return {
                message: "email not valid"
            }
        }
    }
    async userFollow(follow: string, followers: string) {
        if (follow || followers) {
            return {
                follow: this.userDataAcess.follow(follow, followers),
            }
        }
        else {
            return {
                message: "follow || followers prop empty"
            }
        }
    }
    async userUnFollow(follow: string, followers: string) {
        if (follow || followers) {
            return {
                follow: this.userDataAcess.unFollow(follow, followers),
            }
        }
        else {
            return {
                message: "follow || followers prop empty"
            }
        }
    }
    async userGetFollow(id: string) {
        if (id) {
            return {
                follow: await this.userDataAcess.getFollow(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async userGetFollowers(id: string) {
        if (id) {
            return {
                followers: await this.userDataAcess.getFollowers(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async userAddBasket(id: string, basket: any) {
        const userBasket = security.crypto.cryen(basket)
        if (userBasket) {
            return {
                basket: await this.userDataAcess.addBasket(id, userBasket.toString()),
            }
        }
        else {
            return {
                message: "id basket prop empty"
            }
        }
    }
    async userGetBasket(id: string) {
        if (id) {
            return {
                basket: await this.userDataAcess.getBasket(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async userAddOrder(id: string, order: any) {
        const userOrder = security.crypto.cryen(order)
        if (userOrder) {
            return {
                order: await this.userDataAcess.addOrder(id, userOrder.toString()),
            }
        }
        else {
            return {
                message: "id order prop empty"
            }
        }
    }
    async userGetOrder(id: string) {
        if (id) {
            return {
                order: await this.userDataAcess.getOrder(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async userGetRoles() {
        return this.userDataAcess.getRoles()
    }
    async userGetRole(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                role: await this.userDataAcess.getRole(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async userAddRoles(name: string) {
        if (name) {
            return {
                roles: await this.userDataAcess.addRoles(name),
            }
        }
        else {
            return {
                message: "name prop empty"
            }
        }
    }
    async userUpdateRole(id: string, name: string) {
        if (id && name) {
            return {
                role: await this.userDataAcess.updateRoles(id, name),
            }
        }
        else {
            return {
                message: "id name prop empty"
            }
        }
    }
    async userDeleteRoles(id: string) {
        if (id) {
            return {
                userRoles: await this.userDataAcess.deleteRoles(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async userRelAddRoles(userId: string, roleId: string) {
        if (userId || roleId) {
            return {
                userRoles: await this.userDataAcess.addUserRole(userId, roleId),
            }
        }
        else {
            return {
                message: "userId roleId prop empty"
            }
        }
    }
    async userRelDeleteRoles(userId: string, roleId: string) {
        if (userId || roleId) {
            return {
                userRoles: await this.userDataAcess.deleteUserRole(userId, roleId),
            }
        }
        else {
            return {
                message: "userId roleId prop empty"
            }
        }
    }
    async userGetUserRole(id: string) {
        if (id) {
            return {
                userRoles: await this.userDataAcess.getUserRole(id),
            }
        }
        else {
            return {
                message: "id roleId prop empty"
            }
        }
    }
    async userGetRoleUser(id: string) {
        if (id) {
            return {
                userRoles: await this.userDataAcess.getRoleUser(id),
            }
        }
        else {
            return {
                message: "id roleId prop empty"
            }
        }
    }
    async userFindEmail(email: string) {
        if (email) {
            return {
                userEmail: await this.userDataAcess.getUserEmail(email),
            }
        }
        else {
            return {
                message: "id roleId prop empty"
            }
        }
    }
    async userSign(email: string, password: string) {
        const isEmail = validation.isEmailValidation(email)
        if (isEmail.isEmail) {
            const isUser: any = await this.userDataAcess.getUserEmail(email)
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
    async userLogout(token: string) {
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
    async userPayment(id:string) {
        if (id) {
            return {
                payment: await this.userDataAcess.payment(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async userChatSendMessage(userId:any,otherUserId:any) {
        if (userId && otherUserId) {
            return {
                chat: await this.userDataAcess.chatSendMessage(userId,otherUserId),
            }
        }
        else {
            return {
                message: "userId otherUserId prop empty"
            }
        }
    }
    async userChatJoinRoom(userId:any,otherUserId:any) {
        if (userId && otherUserId) {
            return {
                chat: await this.userDataAcess.chatJoinRoom(userId,otherUserId),
            }
        }
        else {
            return {
                message: "userId otherUserId prop empty"
            }
        }
    }
    async userFindRoomId(userId:any,otherUserId:any) {
        if (userId && otherUserId) {
            return {
                chat: await this.userDataAcess.chatFindRoom(userId,otherUserId),
            }
        }
        else {
            return {
                message: "userId otherUserId prop empty"
            }
        }
    }
    async userFindRoomName(userId:any,otherUserId:any) {
        if (userId && otherUserId) {
            return {
                chat: await this.userDataAcess.chatFindRoomName(userId,otherUserId),
            }
        }
        else {
            return {
                message: "userId otherUserId prop empty"
            }
        }
    }
}