import express from 'express'
import { createShow } from '../controller/createShow'
import { getShowByWeekDay } from '../controller/getShowByWeekDay'


const showRouter = express.Router()

showRouter.get('/', getShowByWeekDay )
showRouter.post('/create', createShow )
export default showRouter