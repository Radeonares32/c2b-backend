import { Handler } from 'express'
//! Service
import { BlogService } from '../services/blog.service'

export class BlogController {
    static getBlog: Handler = async (req, res) => {
        const blog = await new BlogService().blogFindAll()
        res.json({ blog })
    }
    static getBlogId: Handler = async (req, res) => {
        const { id } = req.body
        const blog = new BlogService().blogFind(id)
        res.json({ blog: await blog.blog })
    }
    static createBlog: Handler = async (req, res) => {

        const blogService = new BlogService()
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { html, title, description, text, context, questions } = req.body
        const { image, icon } = req.files as any | any[]
        icons.push({ src: icon[0].path, context })
        icons.shift()

        if (html.Error) {
            res.json({
                error: html.Error
            })
        }
        else {
            const blog = await blogService.blogCreate(image[0].path,  title, text, description, html, icons, questions)
            if (blog.message) {
                res.json({
                    error: blog.message
                })
            }
            else {
                res.json({
                    message: await blog.create
                })
            }
        }
    }
    static updateBlog: Handler = async (req, res) => {
        const blogMainService = new BlogService()
        const { id, html, title, description, text, context, questions } = req.body
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { image, icon } = req.files as any | any[]

        icons.push({ src: icon[0].path, context })
        icons.shift()
        if (html.Error) {
            res.json({
                error: html.Error
            })
        }
        else {
            const blog = blogMainService.blogUpdate(id, image[0].path, title, text, description, html, icons, questions)
            if (blog.message) {
                res.json({
                    error: blog.message
                })
            }
            else {
                res.json({
                    message: await blog.update
                })
            }
        }
    }
    static deleteBlog: Handler = async (req, res) => {
        const blogService = new BlogService()
        const { id } = req.body
        const blog = blogService.blogDelete(id)
        if (blog.message) {
            res.json({
                error: blog.message
            })
        }
        else {
            res.json({
                message: await blog.delete
            })
        }

    }
}
