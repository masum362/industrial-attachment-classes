import Todos from "../models/todos.model.js";
import { Todo } from "../types/types.js";

interface createTodoParams {
  title: string;
  completed: boolean;
}

async function findAll() {
  return Todos.find();
}
async function findById() {}
async function createTodo({ title, completed }: createTodoParams) {
  await Todos.insertOne({ title, completed });
  const newTodos = await findAll();
  return newTodos;
}

// Partial<Omit<Todo,"_id" | "createdAt" | "updatedAt">>

async function updateTodo(
  id:string,
  updatedData: Partial<Omit<Todo, "_id" | "createdAt" | "updatedAt">>) {
  await Todos.updateOne({ _id: id }, updatedData);
  const newTodos = await findAll();
  return newTodos;
}
async function deleteTodo(id: string) {
  await Todos.deleteOne({ _id: id });
  const newTodos = await findAll();
  return newTodos;
}

export const todoServices = {
  findAll,
  findById,
  createTodo,
  updateTodo,
  deleteTodo,
};
