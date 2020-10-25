import { Router } from 'express'
import todoController from '../controllers/todo'

const router = Router()

router.get('/', todoController.getTodos)

router.post('/', todoController.addTodo)

export default router