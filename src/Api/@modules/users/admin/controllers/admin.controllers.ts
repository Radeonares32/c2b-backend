import { Handler } from 'express'
//! Service
import { AdminService } from '../services/admin.service'

export class AdminController {
    static getAdmin: Handler = async (req, res) => {
        const admin = await new AdminService().adminFindAll()
        res.json({ admin })
    }
    static getAdminId: Handler = async (req, res) => {
        const { id } = req.body
        const admin = new AdminService().adminFind(id)
        res.json({ admin: await admin.admin })
    }
    static createAdmin: Handler = async (req, res) => {
        const adminService = new AdminService()

        const { email, password, passwordRepeat,name,gsmNumber,identityNumber,city,country,surname,zipCode } = req.body
        if (password !== passwordRepeat) {
            res.json({
                error: "password not match"
            })
        }
        else {
            const admin = await adminService.adminCreate(name,surname,email,password,gsmNumber,identityNumber,city,country,zipCode)
            if ((await admin.create)?.message) {
                res.json({
                    message: (await admin.create)?.message
                })
            }
            else {
                res.json({
                    message: (await admin.create)?.message
                })
            }

        }
    }
    static updateAdmin: Handler = async (req, res) => {
        const adminService = new AdminService()
        const { id, email, newPassword, oldPassword, hash, password, passwordRepeat,name,gsmNumber,identityNumber,city,country,surname,zipCode } = req.body
        if (!newPassword) {
            res.json({
                message: "newPassword empty !!"
            })
        }
        else {
            const admin = adminService.admintUpdate(id,oldPassword,name,surname,email,password,gsmNumber,identityNumber,city,country,zipCode,newPassword,hash)
            if (admin.message) {
                res.json({
                    message: admin.message
                })
            }
            else {
                res.json({
                    message: await admin.update
                })
            }
        }
    }
    static deleteAdmin: Handler = async (req, res) => {
        const adminService = new AdminService()
        const { id } = req.body
        const admin = adminService.adminDelete(id)
        if (admin.message) {
            res.json({
                message: await admin.message
            })
        }
        else {
            res.json({
                message: await admin.delete
            })
        }

    }
    static signAdmin: Handler = async (req, res) => {
        const adminService = new AdminService()
        const { email, password } = req.body
        const admin = await adminService.adminSign(email, password)
        if (admin.sign) {
            res.json(admin.sign)
        }
        else {
            res.json(admin.token)
        }
    }
    static logoutAdmin: Handler = async ({ headers }, res) => {
        const adminService = new AdminService()
        const token = headers['x-access-token']
        if (token) {
            const admin = await adminService.adminLogout(token as string)
            res.status(200).json({
                message: admin.message
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
}
