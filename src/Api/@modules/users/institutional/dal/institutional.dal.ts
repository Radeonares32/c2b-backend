const Iyzipay = require('iyzipay');
import ip from 'ip'
import { Server } from 'socket.io'
import date from 'date-and-time'
//? Repository
import { institutionalRepository } from '../repository/Iinstitutional.repo'
import { v4 as uuid } from 'uuid'
//? Entity
import { Iinstitutional } from '../entity/Iinstitutional'

//? Models
import { institutional } from '../models/institutional.models'

//? DataBase
import { neo4j } from '../../../../../core/data-source/neo4j/connection'

//? Helper
import { paymentRequest } from '../helper/payment.helper'

//? Security 
import { security } from '../../../../security/security'

//? Admin Dal
import { AdminDal } from '../../admin/dal/admin.dal'

//? Server
import { server } from '../../../../../server'
//? Chat
import { chat } from '../chat/chat'

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})


export class institutionalDal implements institutionalRepository {
    async delete(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("match (u:institutional {id:$id}) detach delete u", { id: id })
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(name: string, surname: string, email: string, image: string, phone: string, password: string, dateOfBirth: string, gender: string, basket: string, order: string, creditCardName: string, creditCardSurname: string, creditCardNumber: string, creditCardCvv: string, city: string, country: string, address: string, zipCode: string, expireMonth: string, expireYear: string,companyName: string, position: string, activityField: string, businessType: string, taxOffice: string, identity: number, companyAddress: string, district: string, service: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("create (u:institutional {id:$id,name:$name,surname:$surname,email:$email,image:$image,phone:$phone,password:$password,dateOfBirth:$dateOfBirth,gender:$gender,basket:$basket,order:$basket,order:$order,creditCardName:$creditCardName,creditCardSurname:$creditCardSurname,creditCardNumber:$creditCardNumber,creditCardCvv:$creditCardCvv,city:$city,country:$country,address:$address,zipCode:$zipCode,expireMonth:$expireMonth,expireYear:$expireYear,companyName:$companyName,position:$position,activityField:$activityField,businessType:$businessType,taxOffice:$taxOffice,identity:$identity,companyAddress:$companyAddress,district:$district,service:$service})", {
                    id: uuid(),
                    name,
                    surname,
                    email,
                    image,
                    phone,
                    password,
                    dateOfBirth,
                    gender,
                    basket,
                    order,
                    creditCardName,
                    creditCardSurname,
                    creditCardNumber,
                    creditCardCvv,
                    city,
                    country,
                    address,
                    zipCode,
                    expireMonth,
                    expireYear,
                    identity,
                    companyName,
                    position,
                    activityField,
                    businessType,
                    taxOffice,
                    companyAddress,
                    district,
                    service,
                }).catch(err=>console.log(err))
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<Iinstitutional> {
        return new Promise(async (resolve, reject) => {
            try {
                const user: any = await neo4j()?.cypher("match (u:institutional {id:$id}) return u.id,u.name,u.surname,u.email,u.image,u.dateOfBirth,u.gender,u.basket,u.order,u.creditCardName,u.creditCardSurname,u.creditCardNumber,u.creditCardCvv,u.city,u.country,u.address,u.zipCode,u.expireMonth,u.expireYear,u.identity,u.companyName,u.position,u.activityField,u.businessType,u.taxOffice,u.companyAddress,u.district,u.service", { id })
                const rUser = user.records.map((uss: any) => {
                    return uss.map((res: any) => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<Iinstitutional[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const user: any = await neo4j()?.cypher("match (u:institutional) return u", {})
                const rUser = user.records.map((uss: any) => {
                    return uss.map((res: any) => {
                        return res.properties
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, name: string, surname: string, email: string, image: string, phone: string, password: string, dateOfBirth: string, gender: string, basket: string, order: string, creditCardName: string, creditCardSurname: string, creditCardNumber: string, creditCardCvv: string, city: string, country: string, address: string, zipCode: string, expireMonth: string, expireYear: string, companyName: string, position: string, activityField: string, businessType: string, taxOffice: string, identity: number, companyAddress: string, district: string, service: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher("match (u:institutional {id:$id}) set u.name=$name,u.surname=$surname,u.email=$email,u.image=$image,u.phone=$phone,u.password=$password,u.dateOfBirth=$dateOfBirth,u.gender=$gender,u.basket=$basket,u.order=$order,u.creditCardName=$creditCardName,u.creditCardSurname=$creditCardSurname,u.creditCardNumber=$creditCardNumber,u.creditCardCvv=$creditCardCvv,u.city=$city,u.country=$country,u.address=$address,u.zipCode=$zipCode,u.expireMonth=$expireMonth,u.expireYear=$expireYear,u.identity=$identity,u.companyName=$companyName,u.position=$position,u.activityField=$activityField,u.businessType=$businessType,u.taxOffice=$taxOffice,u.companyAddress=$companyAddress,u.district=$district,u.service=$service return u", {
                    id, name, surname, email, image, phone, password, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv, city, country, address, zipCode, expireMonth, expireYear, identity,companyName,position,activityField,businessType,taxOffice,companyAddress,district,service
                }).catch(err => console.log(err))
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async follow(follow: string, followers: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher("match (f1:institutional {id:$follow}) match(f2:institutional {id:$followers}) create(f1)-[follow:FOLLOWI]->(f2) create (f2)-[followers:FOLLOWERSI]->(f1) ", { follow, followers });

                resolve({ message: "Success following" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async unFollow(follow: string, followers: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher("match(f1:institutional {id:$follow})-[follow:FOLLOWI]->(f2:institutional {id:$followers}) match(f2:institutional {id:$followers})-[followers:FOLLOWERSI]->(f1:institutional {id:$follow}) delete followers,follow", { follow, followers })
                resolve({ message: "Success un follow" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getFollow(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (n:institutional {id:$id})-[follow:FOLLOWI]->(n1:institutional) return n1.id,n1.name,n1.surname,n1.email,n1.image,n1.phone,n1.password,n1.dateOfBirth,n1.gender,n1.basket,n1.order,n1.creditCardName,n1.creditCardSurname,n1.creditCardNumber,n1.creditCardCvv,n1.city,n1.country,n1.address,n1.zipCode,n1.expireMonth,n1.expireYear,n1.identity,n1.companyName,n1.position,n1.activityField,n1.businessType,n1.taxOffice,n1.companyAddress,n1.district,n1.service", { id: id })
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getFollowers(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (n:institutional {id:$id})-[followers:FOLLOWERSI]->(n1:institutional) return n1.id,n1.name,n1.surname,n1.email,n1.image,n1.phone,n1.password,n1.dateOfBirth,n1.gender,n1.basket,n1.order,n1.creditCardName,n1.creditCardSurname,n1.creditCardNumber,n1.creditCardCvv,n1.city,n1.country,n1.address,n1.zipCode,n1.expireMonth,n1.expireYear,n1.identity,n1.companyName,n1.position,n1.activityField,n1.businessType,n1.taxOffice,n1.companyAddress,n1.district,n1.service", { id: id })
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async addBasket(id: string, basket: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher(`match (u:institutional {id:'${id}'}) set u.basket='${basket}' return u`, {})
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res.properties
                    })
                })
                resolve({ message: "Success Add Basket" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getBasket(id: string): Promise<Iinstitutional> {
        return new Promise(async (resolve, reject) => {
            try {
                const user: any = await neo4j()?.cypher("match (u:institutional {id:$id}) return u.id,u.basket", { id })
                const rUser = user.records.map((uss: any) => {
                    return uss.map((res: any) => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async addOrder(id: string, order: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher(`match (u:institutional {id:'${id}'}) set u.order='${order}' return u`, {})
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res.properties
                    })
                })
                resolve({ message: "Success Add Order" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getOrder(id: string): Promise<Iinstitutional> {
        return new Promise(async (resolve, reject) => {
            try {
                const user: any = await neo4j()?.cypher("match (u:institutional {id:$id}) return u.id,u.order", { id })
                const rUser = user.records.map((uss: any) => {
                    return uss.map((res: any) => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async addRoles(name: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("create (r:role {id:$id,name:$name})", { id: uuid(), name })
                resolve({ message: "Success role" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getRoles(): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (r:role) return r", {})
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res.properties
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async updateRoles(id: string, name: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher(`match (u:role {id:'${id}'}) set u.name='${name}' return u`, {})
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res.properties
                    })
                })
                resolve({ message: "Success Update Role" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getRole(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (r:role {id:$id}) return r.id,r.name", { id })
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async deleteRoles(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("match (r:role {id:$id}) delete r", { id })
                resolve({ message: "Deleted role" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async addUserRole(userId: string, roleId: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("match (u:institutional {id:$userId}) match(r:role {id:$roleId}) create(u)-[rol:ROLE]->(r) create (r)-[user:institutionalRol]->(u) ", { userId, roleId });
                resolve({ message: "Success user role rel" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async deleteUserRole(userId: string, roleId: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("match(u:institutional {id:$userId})-[rol:ROLE]->(r:role {id:$roleId}) match(r:role {id:$roleId})-[user:institutionalRol]->(u:user {id:$userId}) delete rol,user", { userId, roleId });
                resolve({ message: "Success user role rel" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getUserRole(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (n:institutional {id:$id})-[rol:ROLE]->(r:role) return r.name,r.id", { id: id })
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getRoleUser(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (r:role {id:$id})-[user:institutionalRol]->(u:institutional) return u.id,u.name,u.surname", { id: id })
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getUserEmail(email: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (u:institutional {email:$email}) return u.email,u.password", { email })
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getSign(email: string, password: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (u:institutional {email:$email,password:$password}) return u", { email, password })
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res.properties
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async payment(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                let price = 0
                const payReq: any = {}
                const user: any = await this.find(id)
                const adminDal = new AdminDal()
                const admin = await adminDal.findAll()
                const iyzipay = new Iyzipay({
                    apiKey: "sandbox-9xcTDLFciF1PiqfZlOG4pZ9XitSLpSQk",
                    secretKey: "sandbox-BZCqOiZqjxYjDGNvCtPKGHdQzpRX96O5",
                    uri: 'https://sandbox-api.iyzipay.com'
                })

                const basket = security.crypto.cryde(user[0][7])
                basket.map((item: any) => {
                    price += item.price
                    item.itemType = Iyzipay.BASKET_ITEM_TYPE.PHYSICAL
                })
                const now = new Date()
                payReq.cardHolderName = user[0][1] + " " + user[0][2]
                payReq.cardNumber = user[0][11]
                payReq.expireMonth = user[0][17]
                payReq.expireYear = user[0][18]
                payReq.cvc = user[0][12]
                payReq.gsmNumber = user[0][20]
                payReq.contactName = user[0][1] + " " + user[0][2]
                payReq.name = user[0][1]
                payReq.price = price
                payReq.adminContactName = admin[0].name + " " + admin[0].surname
                payReq.adminCity = admin[0].city
                payReq.adminCountry = admin[0].country
                payReq.adminAddress = admin[0].country + " " + admin[0].city
                payReq.adminZipCode = admin[0].zipCode
                payReq.surname = user[0][2]
                payReq.email = user[0][3]
                payReq.identityNumber = "11111111111"
                payReq.city = user[0][13]
                payReq.basket = basket
                payReq.country = user[0][14]
                payReq.address = user[0][15]
                payReq.zipCode = user[0][16]
                payReq.ip = ip.address()
                payReq.date = date.format(now, "YYYY-MM-DD HH:mm:ss")

                iyzipay.payment.create(paymentRequest(payReq), function (err: any, result: any) {
                    if (result.status === "success") {
                        resolve({ message: "Success Payment" })
                    }
                    if (err) {
                        reject({ message: "Error " + err })
                    }
                });

            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async chatJoinRoom(userId: any, otherUserId: any): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user: any = await this.find(userId)
                const user1: any = await this.find(otherUserId)

                let roomName = user[0][1] + user[0][2] + user1[0][1] + user1[0][2]
                let reRoomName = user1[0][1] + user1[0][2] + user[0][1] + user[0][2]
                const isCreateRoom = await chat.createRoom(roomName, reRoomName)
                const isJoinRoom = await chat.joinRoom(userId, otherUserId, roomName)
                resolve({
                    message: isJoinRoom.message,
                    createMessage: isCreateRoom.message
                } as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async chatSendMessage(userId: any, otherUserId: any): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user: any = await this.find(userId)
                const user1: any = await this.find(otherUserId)

                let messageBoxName: any = user[0][1] + user[0][2] + user1[0][1] + user1[0][2] + "box"
                const mess = await chat.MessageBox("empty", messageBoxName)

                const room = await chat.findRoom(userId, otherUserId)

                const roomName = await chat.findRoomName(userId, otherUserId)

                const me = await chat.findUserMessageBox(userId, room)

                let reRoomName = user1[0][1] + user1[0][2] + user[0][1] + user[0][2]
                const isCreateRoom = await chat.createRoom(roomName, reRoomName)

                const isJoinRoom = await chat.joinRoom(userId, otherUserId, roomName)

                const messageRel = await chat.MessageSendRel(userId, room, messageBoxName)
                io.on('connection', (socket) => {
                    socket.on(roomName, (data: any, cb: any) => {

                        chat.AddMessage(userId, room, data)
                    })
                })
                resolve({
                    message: mess.message,
                    messageRel: messageRel.message
                } as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async chatFindRoom(userId: any, otherUserId: any): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const findRoom = await chat.findRoom(userId, otherUserId)
                resolve({
                    room: findRoom
                } as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async chatFindRoomName(userId: any, otherUserId: any): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const findRoom = await chat.findRoomName(userId, otherUserId)
                resolve({
                    room: findRoom
                } as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}