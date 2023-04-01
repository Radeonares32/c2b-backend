import { Handler } from 'express'
//! Service
import { CategoryMainService } from '../services/categoryMain.service'

export class CategoryMainController {
    static getCategoryMain: Handler = async (req, res) => {
        const categoryMainService = await new CategoryMainService().categoryMainFindAll()
        res.json({ categoryMainService })
    }
    static getCategoryMainId: Handler = async (req, res) => {
        const { id } = req.body
        const categoryMainService = new CategoryMainService().categoryMainFind(id)
        res.json({ category: await categoryMainService.category })
    }
    static createCategoryMain: Handler = async (req, res) => {
        const categoryMainService = new CategoryMainService()
        const { title } = req.body
        const categoryMain = await categoryMainService.categoryMainCreate(title)
        if (categoryMain.message) {
            res.json({
                error: categoryMain.message
            })
        }
        else {
            res.json({
                message: await categoryMain.create
            })
        }

    }
    static updateCategoryMain: Handler = async (req, res) => {
        const categoryMainService = new CategoryMainService()
        const { id, title } = req.body
        const categoryMain = categoryMainService.categoryMainUpdate(id, title)
        if (categoryMain.message) {
            res.json({
                error: categoryMain.message
            })
        }
        else {
            res.json({
                message: await categoryMain.update
            })
        }

    }
    static deleteCategoryMain: Handler = async (req, res) => {
        const categoryMainService = new CategoryMainService()
        const { id } = req.body
        const categoryMain = categoryMainService.categoryMainDelete(id)
        if (categoryMain.message) {
            res.json({
                error: categoryMain.message
            })
        }
        else {
            res.json({
                message: await categoryMain.delete
            })
        }
    }
}
