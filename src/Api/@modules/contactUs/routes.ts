import express from 'express'
const app = express()

//! ConcatUs routes
import { getConcatUsId,getConcatUs,deleteConcatUs,postConcatUs,putConcatUs } from './routes/concatUs.routes'

export const concatUsRoutes = app.use('/api', getConcatUs,getConcatUsId,deleteConcatUs,putConcatUs,postConcatUs)