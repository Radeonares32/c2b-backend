import { config } from 'dotenv'

export const dotenvConfig = () => {
    config({path:process.cwd() + `/src/.env.${process.env.NODE_ENV}`})
}
