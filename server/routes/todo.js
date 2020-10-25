import { Router } from 'express'
import todoController from '../controllers/todo'

const router = Router()

router.get('/', todoController.getTodos)

router.post('/', todoController.addTodo)

router.put('/:id', todoController.updateTodo)

router.delete('/:id', todoController.deleteTodo)

export default router