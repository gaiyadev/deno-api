import Todo from "../models/todo.ts"
import { Request, Response } from "npm:express"

// get one
const getTodo = async (req: Request, res: Response) => {
    try {
        const todo = await Todo.findById(req.params.id)
        if(!todo) {
            return res.status(404).json({message: "not found"})
        }
      return  res.status(200).json({todo})
    } catch (error) {
        res.json({ message: error.message })
    }
}

// get all
const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find()
       return res.json(todos)
    } catch (error) {
        res.json({ message: error.message })
    }
}
// ceate new
const createTodo = async (req: Request, res: Response) => {
    const todo = new Todo({
        title: req.body.title,
    })
    try {
        const newTodo = await todo.save()
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// update
const updateTodo = async (req: Request, res: Response) => {
    try {
        const todo = await Todo.findById(req.params.id)
        if (todo == null) {
            return res.status(404).json({ message: "Cannot find todo" })
        }
        if (req.body.title != null) {
            todo.title = req.body.title
        }
    
        const updatedTodo = await todo.save()
      return  res.json(updatedTodo)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// delete
const deleteTodo = async (req: Request, res: Response) => {
    try {
        const user = await Todo.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: "Cannot find todo" })
        }
        await user.remove()
        res.json({ message: "Deleted todo" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



export { getTodo, getTodos, createTodo, updateTodo, deleteTodo }