import Todos from "../models/todos.model.js";
import { Todo } from "../types/types.js";

interface createTodoParams {
  title: string;
  completed: boolean;
  userId: string;
}

async function findAll(userId:string) {
  return Todos.find({
    userId:userId
  });
}


async function findById() {}
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
