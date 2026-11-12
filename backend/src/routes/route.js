import express from 'express';
import { addTodo,  deleteTodo,  getAllTodos, updateTodo } from '../controllers/controller.js';
const router = express.Router();

router.get("/todos",getAllTodos);
router.post("/add-todo",addTodo);
router.patch("/update-todo/:id",updateTodo);
router.delete("/delete-todo/:id",deleteTodo);



export default router;