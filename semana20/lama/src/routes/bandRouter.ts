import express from 'express'
import { createBand } from '../controller/createBand'
import { getBandById } from '../controller/getBandById'


const bandRouter = express.Router()

bandRouter.get('/', getBandById)
bandRouter.post('/create', createBand)


export default bandRouter