import express from 'express';
import { getAllTodos,addTodo,updateTodo,deleteTodo } from '../controllers/controllers.js';
const router = express.Router();

router.get("/todos",getAllTodos);
router.post("/add-todo",addTodo);
router.patch("/update-todo/:id",updateTodo);
router.delete("/delete-todo/:id",deleteTodo);



export default router;