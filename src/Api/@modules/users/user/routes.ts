import express from 'express'
const app = express.Router()

//! User routes

import { deleteUser, getUser, getUserId, postUser, putUser, signUser, getUserGoogleAuth, logoutUser, getGoogleUserSign, followUser, unFollowUser, getFollowUser, getFollowersUser, postBasket, getBasketUser, getOrderUser, postOrder,deleteRelRoles,deleteRole,getRole,getRoleUser,getRoles,getUserRole,postAddRoles,postRelAddRoles,putRole,postPayment,postJoinRoom,postSendMessage,getFindRoomId,getFindRoomName } from './routes/user.routes'

export const userRoutes = app.use('/user', getUser, getUserId, postUser, putUser, signUser, deleteUser, getUserGoogleAuth, logoutUser, getGoogleUserSign, followUser, unFollowUser, getFollowUser, getFollowersUser, postBasket, getBasketUser, getOrderUser, postOrder,deleteRelRoles,deleteRole,getRole,getRoleUser,getRoles,getUserRole,postAddRoles,postRelAddRoles,putRole,postPayment,postJoinRoom,postSendMessage,getFindRoomId,getFindRoomName)