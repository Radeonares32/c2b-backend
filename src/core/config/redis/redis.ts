import { createClient } from 'redis'

export const redisConnect = async () => {
    const redis = createClient()
    await redis.connect()
    return redis
}