//! Security
import { security } from '../../security/security'

//? Config
import { config } from '../../../core/config/config'


export const addToken = async (payload: {}) => {
    const redis = await config.redis()
    try {
        const token = security.jwt.payload.signPayload(payload).payload as string
        const check = await redis.EXISTS(token)
        if (check != 1) {
            await redis.set(token, "valid")
            const payload = security.jwt.token.verifyToken(token)
            if (!payload.status) {
                await redis.expire(token, payload.token?.payload?.exp as number)
                return {
                    token
                }
            }
            else {
                return {
                    message: payload.message
                }
            }
        }
        else {
            return {
                message: "token already exist in cache"
            }
        }
    } catch (error) {
        return {
            message: "Token not added to cache"
        }
    }

}
export const checkToken = async (token: string) => {
    const redis = await config.redis()
    try {
        const status = await redis.get(token)
        return {
            status
        }
    } catch (error) {
        return {
            message: "Fetching token from cache failed"
        }
    }
}
export const deleteToken = async (token: string) => {
    const redis = await config.redis()
    try {
        const del = await redis.del(token)
        return {
            status: del
        }

    } catch (error) {
        return {
            message: "Fetching token from cache failed"
        }
    }
}
