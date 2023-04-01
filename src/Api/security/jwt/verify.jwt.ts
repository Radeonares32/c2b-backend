//! Security
import { verifyPayload } from './jwt.sec'

export const verifyToken = (token:string) => {
    if (token) {
        return {
            token:verifyPayload(token),
            message:"Authorized"
        }   
    }
    else {
        return {
            message: "Unauthorized",
            status: 401
        }
    }
}