import { hashSync, compareSync } from 'bcrypt'

export const encrypt = (password: string) => {
    return hashSync(password,8)
}
export const dencrypt = (password: string, hash: string) => {
    return {
        isDencrypt: compareSync(password, hash),
        message: "password not match hash"
    }
}