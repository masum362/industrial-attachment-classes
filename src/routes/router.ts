import express from 'express';
import { getAllTodos,addTodo,updateTodo,deleteTodo } from '../controllers/controllers.js';
import { authenticate } from '../middlewares/jwt.verify.js';
const router = express.Router();

router.get("/todos",authenticate,getAllTodos);
router.post("/add-todo/:id",addTodo);
router.patch("/update-todo/:id",updateTodo);
router.delete("/delete-todo/:id",deleteTodo);



export default router;