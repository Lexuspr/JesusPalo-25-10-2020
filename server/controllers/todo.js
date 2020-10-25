import ToDo from '../models/todo'

const ToDoController = {
    getTodos(req, res) {
        ToDo.find({}).exec((err, todos) => {
            if (err) {
                res.status(500).json({ 'message': err })
            }
            res.status(200).json({todos})
        })
    },
    async addTodo(req, res) {
        try {
            const { name, detail, done } = req.body

        const newToDo = new ToDo({
            name,
            detail,
            done
        })

        const inserted = await newToDo.save()

        res.status(200).json({ message: 'Added', todo: inserted})

        } catch (err) {
            res.status(400).json({ message: err })
        }
    }
}

export default ToDoController