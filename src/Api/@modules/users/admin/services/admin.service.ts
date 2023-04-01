//! Dal
import { AdminDal } from '../dal/admin.dal'

//? Validation
import { validation } from '../../../../validations/validations'

//! Security

import { security } from '../../../../security/security'

//* Cache
import { cache } from '../../../../cache/cache'

export class AdminService {
    private adminDataAcess: AdminDal = new AdminDal()
    constructor(private id?: string, private email?: string, private password?: string) {
        this.id = id
        this.email = email
        this.password = password
    }
    adminFindAll() {
        return this.adminDataAcess.findAll()
    }
    adminFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid) {
            return {
                admin: this.adminDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    adminDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid) {
            return {

                delete: this.adminDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    admintUpdate(id: string,oldPassword: string, name:string,surname:string,email: string, password: string,gsmNumber:string,identityNumber:string,city:string,country:string,zipCode:string,newPassword: string, hash: string) {
        const isEmail = validation.isEmailValidation(email)
        const isValidId = validation.isIdValidation(id)
        const decrypt = security.bcrypt.dencrypt(oldPassword, hash)
        if (isValidId.isValid) {
            if (isEmail.isEmail) {
                if (decrypt.isDencrypt) {
                    const encrypt = security.bcrypt.encrypt(newPassword)
                    return {
                        update: this.adminDataAcess.update(id,name,surname,email,encrypt,gsmNumber,identityNumber,city,country,zipCode )
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
    async adminCreate(name:string,surname:string,email: string, password: string,gsmNumber:string,identityNumber:string,city:string,country:string,zipCode:string) {
        const isEmail = validation.isEmailValidation(email)
        const hash = security.bcrypt.encrypt(password)
        if (isEmail.isEmail) {
            return {
                create: this.adminDataAcess.create(name,surname,email,hash,gsmNumber,identityNumber,city,country,zipCode)
            }
        }
        else {
            return {
                message: "email not vaild"
            }
        }
    }
    async adminSign(email: string, password: string) {
        const isEmail = validation.isEmailValidation(email)
        if (isEmail.isEmail) {
            const isAdmin = await this.adminDataAcess.findEmail(email)
            if (isAdmin) {
                const isHashTrue = security.bcrypt.dencrypt(password, isAdmin.password)
                if (isHashTrue.isDencrypt) {
                    const payload = {
                        email: isAdmin.email
                    }
                    try {
                        return {
                            token: (await cache.redis.Token.addToken(payload)).token
                        }
                    }
                    catch {
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
                    sign: "users not found"
                }
            }
        }
        else {
            return {
                sign: isEmail.message
            }
        }
    }
    async adminFindEmail(email: string) {
        const isEmail = validation.isEmailValidation(email)
        const admin = await this.adminDataAcess.findEmail(email)
        if (isEmail.isEmail) {
            if (admin) {
                return {
                    email: admin.email
                }
            }
            else {
                return {
                    message: "not found user"
                }
            }
        }
        else {
            return {
                message: isEmail.message
            }
        }
    }
    async adminLogout(token: string) {
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
}