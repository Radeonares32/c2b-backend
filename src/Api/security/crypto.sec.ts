import Crypto from 'cryptr'

//! Config
import { config } from '../../core/config/config'
config.Dotenv()

const cryptr = new Crypto(process.env.SECRET_KEY as string)

export const encrypt = (text: any | any[]) => {
    try {
        return cryptr.encrypt(JSON.stringify(text))
    }
    catch (err) {
        return {
            Error: err
        }
    }

}

export const decrypt = (text: any | any[]) => {
    try {
        return JSON.parse(cryptr.decrypt(text))
        
    } catch (err) {
        return {
            Error: err
        }
    }

}
