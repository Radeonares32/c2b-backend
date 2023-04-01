import { Handler } from 'express'
//! Service
import { InstitutionalService } from '../services/institutional.service'

export class InstitutionalController {
    static getInstitutional: Handler = async (req, res) => {
        const user = await new InstitutionalService().institutionalFindAll()
        res.json({ user })
    }
    static getInstitutionalId: Handler = async (req, res) => {
        const { id } = req.body
        const user = new InstitutionalService().institutionalFind(id)
        res.json({ user: await user })
    }
    static createInstitutional: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { name, surname, email, phone, password, passwordRepeat, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv, city, country, address, zipCode, expireMonth, expireYear, identity,companyName,position,activityField,businessType,taxOffice,companyAddress,district,service } = req.body
        const { image } = req.files as any
        if (password !== passwordRepeat) {
            res.json({
                error: "password not match"
            })
        }
        else {
            const user = await institutionalService.institutionalCreate(name,surname,email,image[0].path,phone,password,dateOfBirth,gender,basket,order,creditCardName,creditCardSurname,creditCardNumber,creditCardCvv,city,country,address,zipCode,expireMonth,expireYear,companyName,position,activityField,businessType,taxOffice,identity,companyAddress,district,service)
            if (user.message) {
                res.json({
                    message: user.message
                })
            }
            else {
                res.json({
                    message: (await user.create)?.message
                })
            }

        }
    }
    static updateInstitutional: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { id, hash, oldPassword, newPassword, name, surname, email, phone, password, passwordRepeat, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv, city, country, address, zipCode, expireMonth, expireYear, identity,companyName,position,activityField,businessType,taxOffice,companyAddress,district,service  } = req.body
        const { image } = req.files as any
        if (!newPassword) {
            res.json({
                message: "newPassword empty !!"
            })
        }
        else {
            const user = institutionalService.institutionalUpdate(id,name,oldPassword,hash,newPassword,surname,email,image[0].path,phone,password,dateOfBirth,gender,basket,order,creditCardName,creditCardSurname,creditCardNumber,creditCardCvv,city,country,address,zipCode,expireMonth,expireYear,companyName,position,activityField,businessType,taxOffice,identity,companyAddress,district,service)
            if (user.message) {
                res.json({
                    message: user.message
                })
            }
            else {
                res.json({
                    message: await user.update
                })
            }
        }
    }
    static deleteInstitutional: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { id } = req.body
        const user = institutionalService.institutionalDelete(id)
        if (user.message) {
            res.json({
                message: user.message
            })
        }
        else {
            res.json({
                message: user.delete
            })
        }

    }
    static signInstitutional: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { email, password } = req.body
        const user = await institutionalService.institutionalSign(email, password)
        if (user.token) {
            res.json(user.token)
        }
        else {
            res.json(user.sign)
        }
    }
    static signGoogleInstitutional: Handler = async (req, res) => {
        const user: any = req.user
        const institutionalService = new InstitutionalService()
        const users = await institutionalService.institutionalCreate(user.name.givenName, user.name.familyName, user.emails[0].value, user.photos[0].value, "empty", user.name.givenName + user.name.familyName, "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty","empty", "empty", "empty", "empty", 11111111111,"empty", "empty", "empty")
        if (users.create) {
            const userSign = await institutionalService.institutionalSign(user.emails[0].value, user.name.givenName + user.name.familyName)
            if (userSign.token) {
                res.json(userSign.token)
            }
            else {
                res.json(userSign.sign)
            }
        }
        else {
            res.json(users.create)
        }
    }
    static logoutInstitutional: Handler = async ({ headers }, res) => {
        const institutionalService = new InstitutionalService()
        const token = headers['x-access-token']
        if (token) {
            const user = await institutionalService.institutionalLogout(token as string)
            res.status(200).json({
                message: user.message
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static followInstitutional: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { follow, followers } = req.body
        if (follow && followers) {
            const user = await institutionalService.institutionalFollow(follow, followers)
            res.status(200).json({
                message: await user.follow
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static unFollowInstitutional: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { follow, followers } = req.body
        if (follow && followers) {
            const user = await institutionalService.institutionalUnFollow(follow, followers)
            res.status(200).json({
                message: await user.follow
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getFollowInstitutional: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { follow } = req.body
        if (follow) {
            const user = await institutionalService.institutionalGetFollow(follow)
            res.status(200).json({
                user: user.follow
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getFollowersInstitutional: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { followers } = req.body
        if (followers) {
            const user = await institutionalService.institutionalGetFollowers(followers)
            res.status(200).json({
                user: user.followers
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static postBasket: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { id, basket } = req.body
        if (id && basket) {
            const user = await institutionalService.institutionalAddBasket(id, basket)
            res.status(200).json({
                user: user.basket
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getBasket: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { id } = req.body
        if (id) {
            const user = await institutionalService.institutionalGetBasket(id)
            res.status(200).json({
                user: user.basket
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static postOrder: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { id, order } = req.body
        if (id && order) {
            const user = await institutionalService.institutionalAddOrder(id, order)
            res.status(200).json({
                user: user.order
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getOrder: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { id } = req.body
        if (id) {
            const user = await institutionalService.institutionalGetOrder(id)
            res.status(200).json({
                user: user.order
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getRoles: Handler = async (req, res) => {
        const user = await new InstitutionalService().institutionalGetRoles()
        res.json({ user })
    }
    static getRole: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { id } = req.body
        if (id) {
            const user = await institutionalService.institutionalGetRole(id)
            res.status(200).json({
                user: user.role
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static addRoles: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { name } = req.body
        if (name) {
            const user = await institutionalService.institutionalAddRoles(name)
            res.status(200).json({
                user: user.roles
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static updateRole: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { id, name } = req.body
        if (name) {
            const user = await institutionalService.institutionalUpdateRole(id, name)
            res.status(200).json({
                user: user.role
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static deleteRoles: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { id } = req.body
        if (id) {
            const user = await institutionalService.institutionalDeleteRoles(id)
            res.status(200).json({
                user: user.userRoles
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static relAddRoles: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { userId, roleId } = req.body
        if (userId && roleId) {
            const user = await institutionalService.institutionalRelAddRoles(userId, roleId)
            res.status(200).json({
                user: user.userRoles
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static relDeleteRoles: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { userId, roleId } = req.body
        if (userId && roleId) {
            const user = await institutionalService.institutionalRelDeleteRoles(userId, roleId)
            res.status(200).json({
                user: user.userRoles
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getInstitutionalRole: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { userId } = req.body
        if (userId) {
            const user = await institutionalService.institutionalGetUserRole(userId)
            res.status(200).json({
                user: user.userRoles
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getRoleInstitutional: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { id } = req.body
        if (id) {
            const user = await institutionalService.institutionalGetRoleUser(id)
            res.status(200).json({
                user: user.userRoles
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static postPayment: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { id } = req.body
        if (id) {
            const user = await institutionalService.institutionalPayment(id)
            res.status(200).json({
                user: user.payment
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static postChatSendMessage: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { userId, otherUserId } = req.body
        if (userId && otherUserId) {
            const user = await institutionalService.institutionalChatSendMessage(userId, otherUserId)
            res.status(200).json({
                user: user.chat
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static postChatJoinRoom: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { userId, otherUserId } = req.body
        if (userId && otherUserId) {
            const user = await institutionalService.institutionalChatJoinRoom(userId, otherUserId)
            res.status(200).json({
                user: user.chat
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getChatFindRoom: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { userId, otherUserId } = req.body
        if (userId && otherUserId) {
            const user = await institutionalService.institutionalFindRoomId(userId, otherUserId)
            res.status(200).json({
                user: user.chat
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getChatFindRoomName: Handler = async (req, res) => {
        const institutionalService = new InstitutionalService()
        const { userId, otherUserId } = req.body
        if (userId && otherUserId) {
            const user = await institutionalService.institutionalFindRoomName(userId, otherUserId)
            res.status(200).json({
                user: user.chat
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
}