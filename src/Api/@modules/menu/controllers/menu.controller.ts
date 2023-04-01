import { Handler } from 'express'
//! Service
import { MenuService } from '../services/menu.service'

export class MenuController {
    static getMenu: Handler = async (req, res) => {
        const menu = await new MenuService().menuFindAll()
        res.json({ menu })
    }
    static getMenuId: Handler = async (req, res) => {
        const { id } = req.body
        const menu = new MenuService().menuFind(id)
        res.json({ menu: await menu.menu })
    }
    static createMenu: Handler = async (req, res) => {
        const menuService = new MenuService()
        const { name, type, status } = req.body
        const menu = await menuService.menuCreate(name, type, status)
        if (menu.message) {
            res.json({
                error: menu.message
            })
        }
        else {
            res.json({
                message: await menu.create
            })
        }
    }
    static updateMenu: Handler = async (req, res) => {
        const menuService = new MenuService()
        const { id, name, type, status } = req.body
        const menu = menuService.menuUpdate(id, name, type, status)
        if (menu.message) {
            res.json({
                error: menu.message
            })
        }
        else {
            res.json({
                message: await menu.update
            })
        }
    }
    static deleteMenu: Handler = async (req, res) => {
        const menuService = new MenuService()
        const { id } = req.body
        const menu = menuService.menuDelete(id)
        if (menu.message) {
            res.json({
                error: menu.message
            })
        }
        else {
            res.json({
                message: await menu.delete
            })
        }
    }
}
