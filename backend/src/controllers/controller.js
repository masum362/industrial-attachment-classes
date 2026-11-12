import { ObjectId } from "mongodb";
import { todoRepository } from "../repository/repository.js";

const getAllTodos = async (req, res) => {
  try {
    const result = await todoRepository.findAll();
    return res.status(200).json({ message: "hello world", data: result });
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
};

const addTodo = async (req, res) => {
  const { title } = req.body;

  if (title === "" || title == undefined || title === null) {
    return res.status(503).json({ message: "required." });
  }

  try {
    await todoRepository.createTodo({ title });
    const todos = await todoRepository.findAll();

    return res
      .status(200)
      .json({ message: "todo added successfully", data: todos });
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
};

const updateTodo = async(req, res) => {
  const { completed, title } = req.body;
  const { id } = req.params;

  try {


    const updatedTodo = await todoRepository.updateTodo(id,{completed,title});

     return res
    .status(200)
    .json({ message: "todo updated successfully", data: updatedTodo });
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }

 
};

const deleteTodo = async(req, res) => {
  const { id } = req.params;
  
  try {

    await todoRepository.deleteTodo(id)
    const todos = await todoRepository.findAll();

    return res.status(200).json({ message: "hello world", data: todos });
  } catch (error) {
        return res.status(501).json({ message: error.message });

  }
};

export { getAllTodos, addTodo, updateTodo, deleteTodo };
