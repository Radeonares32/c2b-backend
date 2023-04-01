import { dotenvConfig } from './dotenv/dotenv'
import { redisConnect } from './redis/redis'

export const config = {
    Dotenv: dotenvConfig,
    redis: redisConnect
}