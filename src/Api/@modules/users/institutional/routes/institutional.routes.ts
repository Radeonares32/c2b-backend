import express from 'express'
import passport from 'passport'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { institutional } from '../controllers/controllers'



//? Get
export const getInstitutional = app.get('/', institutional.InstitutionalController.getInstitutional)
export const getInstitutionalId = app.get('/id', institutional.InstitutionalController.getInstitutionalId)
export const getInstitutionalGoogleAuth = app.get('/googleAuth', passport.authenticate('google', { scope: ['profile', 'email'] }), (req, res) => res.redirect('/api/users/user/googleSign'))
export const getGoogleInstitutionalSign = app.get('/googleSign', institutional.InstitutionalController.signGoogleInstitutional)
export const getFollowInstitutional = app.get('/getFollow', institutional.InstitutionalController.getFollowInstitutional)
export const getFollowersInstitutional = app.get('/getFollowers', institutional.InstitutionalController.getFollowersInstitutional)
export const getBasketInstitutional = app.get('/getBasket', middleware.auth.institutionalAuth, institutional.InstitutionalController.getBasket)
export const getOrderInstitutional = app.get('/getOrder', middleware.auth.institutionalAuth, institutional.InstitutionalController.getOrder)
export const getRoles = app.get('/getRoles', middleware.auth.adminAuth, institutional.InstitutionalController.getRoles)
export const getRole = app.get('/getRole', middleware.auth.adminAuth, institutional.InstitutionalController.getRole)
export const getInstitutionalRole = app.get('/getUserRole', middleware.auth.adminAuth, institutional.InstitutionalController.getInstitutionalRole)
export const getRoleInstitutional = app.get('/getRoleUser', middleware.auth.adminAuth, institutional.InstitutionalController.getRoleInstitutional)
export const getFindRoomId = app.get('/getFindRoomId', middleware.auth.institutionalAuth, institutional.InstitutionalController.getChatFindRoom)
export const getFindRoomName = app.get('/getFindRoomName', middleware.auth.institutionalAuth, institutional.InstitutionalController.getChatFindRoomName)

//* Post
export const postInstitutional = app.post('/create', middleware.multer.institutionalUploads, institutional.InstitutionalController.createInstitutional)
export const signInstitutional = app.post('/sign', institutional.InstitutionalController.signInstitutional)
export const logoutInstitutional = app.post('/logout', institutional.InstitutionalController.logoutInstitutional)
export const followInstitutional = app.post('/follow', middleware.auth.institutionalAuth, institutional.InstitutionalController.followInstitutional)
export const unFollowInstitutional = app.post('/unFollow', middleware.auth.institutionalAuth, institutional.InstitutionalController.unFollowInstitutional)
export const postBasket = app.post('/basket', middleware.auth.institutionalAuth, institutional.InstitutionalController.postBasket)
export const postOrder = app.post('/order', middleware.auth.institutionalAuth, institutional.InstitutionalController.postOrder)
export const postAddRoles = app.post('/addRoles', middleware.auth.adminAuth, institutional.InstitutionalController.addRoles)
export const postRelAddRoles = app.post('/addRelRoles', middleware.auth.adminAuth, institutional.InstitutionalController.relAddRoles)
export const postPayment = app.post('/payment', middleware.auth.institutionalAuth, institutional.InstitutionalController.postPayment)
export const postSendMessage = app.post('/sendMessage', middleware.auth.institutionalAuth, institutional.InstitutionalController.postChatSendMessage)
export const postJoinRoom = app.post('/joinRoom', middleware.auth.institutionalAuth, institutional.InstitutionalController.postChatJoinRoom)



//? Update
export const putUser = app.put('/update', middleware.auth.institutionalAuth, middleware.multer.institutionalUploads, institutional.InstitutionalController.updateInstitutional)
export const putRole = app.put('/updateRole', middleware.auth.adminAuth, institutional.InstitutionalController.updateRole)

//! Delete
export const deleteUser = app.delete('/delete', middleware.auth.adminAuth, institutional.InstitutionalController.deleteInstitutional)
export const deleteRole = app.delete('/deleteRole', middleware.auth.adminAuth, institutional.InstitutionalController.deleteRoles)
export const deleteRelRoles = app.delete('/deleteRelRole', middleware.auth.adminAuth, institutional.InstitutionalController.relDeleteRoles)