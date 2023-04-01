import { JwtPayload } from 'jsonwebtoken'
export interface Jwt extends JwtPayload {
    email: string
}