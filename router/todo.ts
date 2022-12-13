import express from "npm:express"
import {getTodo, getTodos, createTodo, updateTodo, deleteTodo } from "../controller/user.ts"

const router = express.Router()

router.get("/", getTodos)
router.get("/:id", getTodo)
router.post("/", createTodo)
router.put("/:id", updateTodo)
router.delete("/:id",deleteTodo)

export default router