import { Handler } from 'express'
//! Service
import { ProductService } from '../services/product.services'

export class ProductController {
    static getProduct: Handler = async (req, res) => {
        const product = await new ProductService().productFindAll()
        res.json({ product })
    }
    static getProductId: Handler = async (req, res) => {
        const { id } = req.body
        const product = new ProductService().productFind(id)
        res.json({ product: await product.product })
    }
    static createProduct: Handler = async (req, res) => {
        const productService = new ProductService()
        const cargos: [{ title: string, src: string }] = [{ title: "", src: "" }]
        const images: [{ src: string }] = [{ src: "" }]
        const types: [{ types: string, context: string }] = [{ types: "", context: "" }]
        const { name, description, type, context, quantity, price, discount, property, category, cargoTitle } = req.body
        const { image, cargo } = req.files as any | any[]
        cargos.push({ src: cargo[0].path, title: cargoTitle })
        types.push({ types: type, context })
        image.forEach((img: any) => {
            images.push({ src: img.path })
        });
        cargos.shift()
        images.shift()
        types.shift()
        const product = await productService.productCreate(name, description, types, quantity, price, discount, images, cargos, property, category)
        if (product.message) {
            res.json({
                error: product.message
            })
        }
        else {
            res.json({
                message: await product.create
            })
        }
    }
    static updateProduct: Handler = async (req, res) => {
        const productService = new ProductService()
        const cargos: [{ title: string, src: string }] = [{ title: "", src: "" }]
        const images: [{ src: string }] = [{ src: "" }]
        const types: [{ types: string, context: string }] = [{ types: "", context: "" }]
        const { id, name, description, type, context, quantity, price, discount, property, category, cargoTitle } = req.body
        const { image, cargo } = req.files as any | any[]
        cargos.push({ src: cargo[0].path, title: cargoTitle })
        types.push({ types: type, context })
        image.forEach((img: any) => {
            images.push({ src: img.path })
        });
        cargos.shift()
        images.shift()
        types.shift()

        const product = productService.productUpdate(id, name, description, types, quantity, price, discount, images, cargos, property, category)
        if (product.message) {
            res.json({
                error: product.message
            })
        }
        else {
            res.json({
                message: await product.update
            })
        }

    }
    static deleteProduct: Handler = async (req, res) => {
        const productService = new ProductService()
        const { id } = req.body
        const product = productService.productDelete(id)
        if (product.message) {
            res.json({
                error: product.message
            })
        }
        else {
            res.json({
                message: await product.delete
            })
        }

    }
}
