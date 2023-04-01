import { signPayload, verifyPayload } from './jwt.sec'
import { verifyToken } from './verify.jwt'

export const jwt = {
    payload: {
        signPayload,
        verifyPayload
    },
    token: {
        verifyToken
    }
}