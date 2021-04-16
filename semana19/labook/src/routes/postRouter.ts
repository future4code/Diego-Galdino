import express from 'express'
import { createPost } from '../controller/createPost'
import { getPostById } from '../controller/getPostById'

const postRouter = express.Router()
postRouter.get('/:id', getPostById)
postRouter.post('/create', createPost)
export default postRouter