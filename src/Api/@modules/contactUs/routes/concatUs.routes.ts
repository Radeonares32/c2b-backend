import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { concatUs } from '../controllers/controllers'

//? Get
export const getConcatUs = app.get('/concat-us', concatUs.ConcatUsController.getConcatUs)
export const getConcatUsId = app.get('/concat-us/id', concatUs.ConcatUsController.getConcatUsId)

//* Post
export const postConcatUs = app.post('/concat-us', middleware.auth.adminAuth, concatUs.ConcatUsController.createConcatUs)

//? Update
export const putConcatUs = app.put('/concat-us', middleware.auth.adminAuth, concatUs.ConcatUsController.updateConcatUs)

//! Delete
export const deleteConcatUs = app.delete('/concat-us', middleware.auth.adminAuth, concatUs.ConcatUsController.deleteConcatUs)