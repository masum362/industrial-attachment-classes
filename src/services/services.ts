import { ObjectId } from "mongoose";
import Todos from "../models/todos.model.js";
import { Todo } from "../types/types.js";

interface createTodoParams {
  title: string;
  completed: boolean;
  userId: string;
}

async function findAll(userId: string) {
  return Todos.find()
}

async function findById(id: string) {
  const todo = await Todos.findById(id);
  return todo;
}
async function createTodo({ title, completed, userId }: createTodoParams) {
  await Todos.create({ title, completed, userId } as Todo);
  const newTodos = await findAll(userId);
  return newTodos;
}

// Partial<Omit<Todo,"_id" | "createdAt" | "updatedAt">>

async function updateTodo(
  id: string,
  updatedData: Partial<Omit<Todo, "_id" | "createdAt" | "updatedAt">>,
) {
  const updatedTodo = await Todos.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });

  return updatedTodo;
}
async function deleteTodo(id: string) {
  await Todos.deleteOne({ _id: id });
}

async function getCompletedTodos(userId:string){
 return await Todos.find({userId:userId,completed:true})
}

export const todoServices = {
  findAll,
  findById,
  createTodo,
  updateTodo,
  deleteTodo,
  getCompletedTodos
};
