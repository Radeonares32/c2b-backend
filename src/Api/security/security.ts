import { dencrypt, encrypt } from './bcrypt.sec'
import { decrypt as cryde, encrypt as cryen } from './crypto.sec'
import { jwt } from './jwt/jwt'

export const security = {
    crypto: {
        cryde,
        cryen
    },
    bcrypt: {
        dencrypt,
        encrypt
    },
    jwt
}