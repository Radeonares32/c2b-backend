import { Handler } from 'express'

//! Security
import { security } from '../../security/security'

//! Service
import { UserService } from '../../@modules/users/user/services/user.service'

//! Cache
import { cache } from '../../cache/cache'

export const userAuth: Handler = async ({ headers }, res, next) => {

    const userService = new UserService()
    const token = headers['x-access-token'] as string

    if (token) {
        const isRedisToken = cache.redis.Token.checkToken(token.toString())
        if ((await isRedisToken).status === "valid") {
            const verify = security.jwt.token.verifyToken(token)
            if (verify.status) {
                res.status(verify.status as number).json(verify.message)
            }
            else {
                const email = verify.token?.payload?.email
                const isEmail = await userService.userFindEmail(email as string)
                if (isEmail.userEmail) {
                    next()
                }
                else {
                    res.status(200).json({ message: "token expired" })
                }

            }
        }
        else if ((await isRedisToken).status === null) {
            res.status(401).json({ message: "invalid token" })
        }
        else {
            res.status(401).json({ message: (await isRedisToken).message })
        }
    }
    else {
        res.status(401).json({
            message: "token not found"
        })
    }

}