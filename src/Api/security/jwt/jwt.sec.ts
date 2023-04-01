import jwt from 'jsonwebtoken'
//! Config
import { config } from '../../../core/config/config'
//! Entity
import { Jwt } from './jwt.payload'


config.Dotenv()

export const signPayload = (payload: {}) => {
    try {
        return {
            payload: jwt.sign(payload, process.env.SECRET_KEY as string, {
                expiresIn: '1h'
            })
        }
    }
    catch (err) {
        return {
            err
        }
    }
}



export const verifyPayload = (token: string) => {
    try {
        return {
            payload: jwt.verify(token, process.env.SECRET_KEY as string) as Jwt
        }
    }
    catch (err) {
        return {
            err: err as string
        }
    }
}