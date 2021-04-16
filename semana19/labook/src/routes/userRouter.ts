import express from 'express'
import { createFriend } from '../controller/createFriend'
import { deleteFriend } from '../controller/deleteFriend'
import { login } from '../controller/login'
import { signup } from '../controller/signup'

const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.post('/friend', createFriend)
userRouter.delete('/unfriend', deleteFriend )

export default userRouter