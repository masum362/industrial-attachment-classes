import { ObjectId } from "mongodb";
import { db } from "../db/connection.js";

const todos = db.collection("todos");

async function findAll() {
  return todos.find().toArray();
}
async function findById(id) {
  return todos.findOne({ _id: new ObjectId(id) });
}
async function createTodo({ title }) {
  const todo = { title, completed: false };
  const result = await todos.insertOne(todo);
  return { _id: result.insertedId, ...todo };
}
async function updateTodo(id, changes) {
  return todos.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: changes },
    { returnDocument: "after" },
  );
}
async function deleteTodo(id) {
  const result = await todos.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount === 1;
}

export const todoRepository = {
  findAll,
  findById,
  createTodo,
  updateTodo,
  deleteTodo,
};
