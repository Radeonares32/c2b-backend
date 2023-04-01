import express from 'express'
const app = express.Router()

//! Institutional routes

import {
    deleteRelRoles, deleteRole, deleteUser, followInstitutional, getBasketInstitutional, getFindRoomId, getFindRoomName, getFollowInstitutional, getFollowersInstitutional, getGoogleInstitutionalSign, getInstitutional, getInstitutionalGoogleAuth, getInstitutionalId, getInstitutionalRole,
    getOrderInstitutional, getRole, getRoleInstitutional, getRoles, logoutInstitutional, postAddRoles, postBasket, postInstitutional, postJoinRoom, postOrder, postPayment, postRelAddRoles, postSendMessage, putRole, putUser, signInstitutional, unFollowInstitutional
} from './routes/institutional.routes'

export const institutionalRoutes = app.use('/institutional',
    deleteRelRoles,
    deleteRole,
    deleteUser,
    followInstitutional,
    getBasketInstitutional,
    getFindRoomId,
    getFindRoomName,
    getFollowInstitutional,
    getFollowersInstitutional,
    getGoogleInstitutionalSign,
    getInstitutional,
    getInstitutionalGoogleAuth,
    getInstitutionalId,
    getInstitutionalRole,
    getOrderInstitutional,
    getRole,
    getRoleInstitutional,
    getRoles,
    logoutInstitutional,
    postAddRoles,
    postBasket,
    postInstitutional,
    postJoinRoom,
    postOrder,
    postPayment,
    postRelAddRoles,
    postSendMessage,
    putRole,
    putUser,
    signInstitutional,
    unFollowInstitutional
)