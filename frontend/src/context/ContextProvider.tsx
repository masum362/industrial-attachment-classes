import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Context, { type Todo } from "./Context.ts";
import axios from "axios";

type ContextProviderProps = {
  children: ReactNode;
};
const API_URL = import.meta.env.VITE_BACKEND_API_URL;

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo | null>(null);

  const getTodos = async () => {
    try {
      const result = await axios.get(`${API_URL}/todos`);
      return result.data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    void getTodos().then(setTodos);
  }, []);

  return (
    <Context.Provider value={{ todos, setTodos, todo, setTodo }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
