import { Request, Response } from "express";
import type { Todo } from "../types/types.js";

import { todoServices } from "../services/services.js";
import { User } from "../types/user.types.js";
import { ObjectId } from "mongoose";

const getAllTodos = async (req: Request, res: Response) => {
  try {
    const user = req.user!;
    console.log(user);
    const todos = await todoServices.findAll(user.userId);
    console.log(todos);
    return res
      .status(200)
      .json({ message: "todos fetched successfully", data: todos });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(500).json({ message });
  }
};
const addTodo = async (
  req: Request<{ id: string }, {}, { title: string; completed: boolean }>,
  res: Response,
) => {
  try {
    const { title, completed } = req.body;
    const { id } = req.params;
    const trimedTitle = title.trim();

    if (!trimedTitle || trimedTitle === null || trimedTitle === undefined) {
      return res.status(404).json({ message: "title must be required." });
    }

    const newTodos = await todoServices.createTodo({
      title,
      completed,
      userId: id,
    });

    return res
      .status(200)
      .json({ message: "todos fetched successfully", data: newTodos });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(500).json({ message });
  }
};
const updateTodo = async (
  req: Request<{ id: string }, {}, { title: string; completed: boolean }>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    // const trimedTitle = title?.trim();
    // if (!trimedTitle || trimedTitle === null || trimedTitle === undefined) {
    //   return res.status(404).json({ message: "title must be required." });
    // }

    const updatedData = { title, completed };

    const newTodos = await todoServices.updateTodo(id, updatedData);

    return res
      .status(200)
      .json({ message: "todos fetched successfully", data: newTodos });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(500).json({ message });
  }
};
const deleteTodo = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const newTodos = await todoServices.deleteTodo(id);

    return res
      .status(200)
      .json({ message: "todos fetched successfully", data: newTodos });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(500).json({ message });
  }
};

const getSingleTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const todo = await todoServices.findById(id);

    return res
      .status(200)
      .json({ message: "todo fetched successfully", data: todo });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(500).json({ message });
  }
};
const completedTodos = async (req: Request, res: Response) => {
  try {
   
    const userId = req.user?.userId as string;
    console.log(userId)

    const completedTodos = await todoServices.getCompletedTodos(userId)
    console.log(completedTodos)

    return res
      .status(200)
      .json({ message: "completed todos fetched successfully", data: completedTodos });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(500).json({ message });
  }
};

export { getAllTodos, addTodo, updateTodo, deleteTodo, getSingleTodo,completedTodos };
