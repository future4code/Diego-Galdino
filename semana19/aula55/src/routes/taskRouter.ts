import express from 'express'
import { createTask } from '../controller/createTask'
import { getTaskById } from '../controller/getTaskById'



const taskRouter = express.Router()

taskRouter.put('/', createTask)
taskRouter.get('/:id', getTaskById)

export default taskRouter