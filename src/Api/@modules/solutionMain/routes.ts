import express from 'express'
const app = express()

//! SolutionMain routes
import {deleteSolutionMain,getSolutionMain,getSolutionMainId,postSolutionMain,putSolutionMain } from './routes/solutionMain.routes'

export const  solutionMainRoutes = app.use('/api', deleteSolutionMain,getSolutionMain,getSolutionMainId,postSolutionMain,putSolutionMain)