import { Types } from 'mongoose'
//! Dal
import { ProductDal } from '../dal/product.dal'

//? Validation
import { validation } from '../../../../validations/validations'

//* Security
import { security } from '../../../../security/security'
export class ProductService {
    private productDataAcess: ProductDal = new ProductDal()
    constructor(private id?: string, private name?: string, private description?: string, private types?: [{ type: string, context: string }], private quantity?: number, private price?: number, private discount?: number, private image?: [{ src: string }], private cargo?: [{ title: string, src: string }], private property?: string, private category?: string) {
        this.id = id
        this.name = name
        this.description = description
        this.types = types
        this.quantity = quantity
        this.price = price
        this.discount = discount
        this.image = image
        this.cargo = cargo
        this.property = property
        this.category = category
    }
    productFindAll() {
        return this.productDataAcess.findAll()
    }
    productFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                product: this.productDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    productDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                delete: this.productDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    productUpdate(id: string, name: string, description: string, types: [{ types: string, context: string }], quantity: number, price: number, discount: number, images: [{ src: string }], cargo: [{ title: string, src: string }], property: string, category: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            const categoryId = new Types.ObjectId(category)
            return {
                update: this.productDataAcess.update(id, name, description, types, quantity, price, discount, images, cargo, property, categoryId)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async productCreate(name: string, description: string, types: [{ types: string, context: string }], quantity: number, price: number, discount: number, images: [{ src: string }], cargo: [{ title: string, src: string }], property: string, category: string) {
        if (name) {
            const categoryId = new Types.ObjectId(category)
            return {
                create: this.productDataAcess.create(name, description, types, quantity, price, discount, images, cargo, property, categoryId),
            }
        }
        else {
            return {
                message: "prop not valid"
            }
        }

    }
}