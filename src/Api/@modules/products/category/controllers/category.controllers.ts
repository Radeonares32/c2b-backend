import { Handler } from 'express'
//! Service
import { CategoryService } from '../services/category.service'

export class CategoryController {
    static getCategory: Handler = async (_req, res) => {
        const categoryService = await new CategoryService().categoryFindAll()
        res.json({ categoryService })
    }
    static getCategoryId: Handler = async (req, res) => {
        const { id } = req.body
        const categoryService = new CategoryService().categoryFind(id)
        res.json({ category: await categoryService.category })
    }
    static createCategory: Handler = async (req, res) => {
        const categoryService = new CategoryService()
        const { title, categoryMain } = req.body
        const category = await categoryService.categoryCreate(title, categoryMain)
        if (category.message) {
            res.json({
                error: category.message
            })
        }
        else {
            res.json({
                message: await category.create
            })
        }

    }
    static updateCategory: Handler = async (req, res) => {
        const categoryService = new CategoryService()
        const { id, title, categoryMain } = req.body
        const category = categoryService.categoryUpdate(id, title, categoryMain)
        if (category.message) {
            res.json({
                error: category.message
            })
        }
        else {
            res.json({
                message: await category.update
            })
        }

    }
    static deleteCategory: Handler = async (req, res) => {
        const categoryService = new CategoryService()
        const { id } = req.body
        const category = categoryService.categoryDelete(id)
        if (category.message) {
            res.json({
                error: category.message
            })
        }
        else {
            res.json({
                message: await category.delete
            })
        }
    }
}
