import { Handler } from 'express'
//! Service
import { BlogMainService } from '../services/blogMain.service'

export class BlogMainController {
    static getBlogMain: Handler = async (req, res) => {
        const blogMain = await new BlogMainService().blogMainFindAll()
        res.json({ blogMain })
    }
    static getBlogMainId: Handler = async (req, res) => {
        const { id } = req.body
        const blogMain = new BlogMainService().blogMainFind(id)
        res.json({ blogMain: await blogMain.blogMain })
    }
    static createBlogMain: Handler = async (req, res) => {

        const blogMainService = new BlogMainService()
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { html, title, description, text, context, questions } = req.body
        const { image, icon, pageImage } = req.files as any | any[]
        icons.push({ src: icon[0].path, context })
        icons.shift()

        if (html.Error) {
            res.json({
                error: html.Error
            })
        }
        else {
            const blogMain = await blogMainService.blogMainCreate(image[0].path, pageImage[0].path, title, text, description, html, icons, questions)
            if (blogMain.message) {
                res.json({
                    error: blogMain.message
                })
            }
            else {
                res.json({
                    message: await blogMain.create
                })
            }
        }
    }
    static updateBlogMain: Handler = async (req, res) => {
        const blogMainService = new BlogMainService()
        const { id, html, title, description, text, context, questions } = req.body
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { image, icon, pageImage } = req.files as any | any[]

        icons.push({ src: icon[0].path, context })
        icons.shift()
        if (html.Error) {
            res.json({
                error: html.Error
            })
        }
        else {
            const blogMain = blogMainService.blogMainUpdate(id, image[0].path, pageImage[0].path, title, text, description, html, icons, questions)
            if (blogMain.message) {
                res.json({
                    error: blogMain.message
                })
            }
            else {
                res.json({
                    message: await blogMain.update
                })
            }
        }
    }
    static deleteBlogMain: Handler = async (req, res) => {
        const blogMainService = new BlogMainService()
        const { id } = req.body
        const blogMain = blogMainService.blogMainDelete(id)
        if (blogMain.message) {
            res.json({
                error: blogMain.message
            })
        }
        else {
            res.json({
                message: await blogMain.delete
            })
        }

    }
}
