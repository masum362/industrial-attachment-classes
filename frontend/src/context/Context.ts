import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export type Todo = {
  _id:string;
  title:string;
  completed:boolean
}

type ContextValue = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  todo: Todo | null;
  setTodo: Dispatch<SetStateAction<Todo | null>>;
};

const Context = createContext<ContextValue | null>(null);

export default Context;
