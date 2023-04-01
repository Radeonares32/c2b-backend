import express from 'express'
import passport from 'passport'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { user } from '../controllers/controllers'



//? Get
export const getUser = app.get('/', user.UserController.getUser)
export const getUserId = app.get('/id', user.UserController.getUserId)
export const getUserGoogleAuth = app.get('/googleAuth', passport.authenticate('google', { scope: ['profile', 'email'] }), (req, res) => res.redirect('/api/users/user/googleSign'))
export const getGoogleUserSign = app.get('/googleSign', user.UserController.signGoogleUser)
export const getFollowUser = app.get('/getFollow', user.UserController.getFollowUser)
export const getFollowersUser = app.get('/getFollowers', user.UserController.getFollowersUser)
export const getBasketUser = app.get('/getBasket', middleware.auth.userAuth, user.UserController.getBasket)
export const getOrderUser = app.get('/getOrder', middleware.auth.userAuth, user.UserController.getOrder)
export const getRoles = app.get('/getRoles', middleware.auth.adminAuth, user.UserController.getRoles)
export const getRole = app.get('/getRole', middleware.auth.adminAuth, user.UserController.getRole)
export const getUserRole = app.get('/getUserRole', middleware.auth.adminAuth, user.UserController.getUserRole)
export const getRoleUser = app.get('/getRoleUser', middleware.auth.adminAuth, user.UserController.getRoleUser)
export const getFindRoomId = app.get('/getFindRoomId', middleware.auth.userAuth, user.UserController.getChatFindRoom)
export const getFindRoomName = app.get('/getFindRoomName', middleware.auth.userAuth, user.UserController.getChatFindRoomName)

//* Post
export const postUser = app.post('/create', middleware.multer.userUploads, user.UserController.createUser)
export const signUser = app.post('/sign', user.UserController.signUser)
export const logoutUser = app.post('/logout', user.UserController.logoutUser)
export const followUser = app.post('/follow', middleware.auth.userAuth, user.UserController.followUser)
export const unFollowUser = app.post('/unFollow', middleware.auth.userAuth, user.UserController.unFollowUser)
export const postBasket = app.post('/basket', middleware.auth.userAuth, user.UserController.postBasket)
export const postOrder = app.post('/order', middleware.auth.userAuth, user.UserController.postOrder)
export const postAddRoles = app.post('/addRoles', middleware.auth.adminAuth, user.UserController.addRoles)
export const postRelAddRoles = app.post('/addRelRoles', middleware.auth.adminAuth, user.UserController.relAddRoles)
export const postPayment = app.post('/payment', middleware.auth.userAuth, user.UserController.postPayment)
export const postSendMessage = app.post('/sendMessage', middleware.auth.userAuth, user.UserController.postChatSendMessage)
export const postJoinRoom = app.post('/joinRoom', middleware.auth.userAuth, user.UserController.postChatJoinRoom)



//? Update
export const putUser = app.put('/update', middleware.auth.userAuth, middleware.multer.userUploads, user.UserController.updateUser)
export const putRole = app.put('/updateRole', middleware.auth.adminAuth, user.UserController.updateRole)

//! Delete
export const deleteUser = app.delete('/delete', middleware.auth.adminAuth, user.UserController.deleteUser)
export const deleteRole = app.delete('/deleteRole', middleware.auth.adminAuth, user.UserController.deleteRoles)
export const deleteRelRoles = app.delete('/deleteRelRole', middleware.auth.adminAuth, user.UserController.relDeleteRoles)