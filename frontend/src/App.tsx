import { use, useState } from "react";
import type { SubmitEvent } from "react";
import axios from "axios";
import Context, { type Todo } from "./context/Context.ts";
import "./App.css";

type ApiResponse<T> = {
  message: string;
  data: T;
};
const API_URL = import.meta.env.VITE_BACKEND_API_URL;

const App = () => {
  const context = use(Context);
  if (!context) {
    throw new Error("App must be rendered inside ContextProvider.");
  }

  const { todos, setTodos } = context;
  const [newTitle, setNewTitle] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAdd = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = newTitle.trim();
    if (!title) return;

    setIsAdding(true);
    setError(null);
    try {
      const response = await axios.post<ApiResponse<Todo[]>>(
        `${API_URL}/add-todo`,
        { title },
      );
      setTodos(response.data.data);
      setNewTitle("");
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Could not add the todo.",
      );
    } finally {
      setIsAdding(false);
    }
  };

  const handleUpdate = async (
    event: SubmitEvent<HTMLFormElement>,
    todo: Todo,
  ) => {
    event.preventDefault();
    const title = editTitle.trim();
    if (!title) return;

    setPendingId(todo._id);
    setError(null);
    try {
      const response = await axios.patch<ApiResponse<Todo>>(
        `${API_URL}/update-todo/${todo._id}`,
        { title, completed: todo.completed },
      );
      setTodos((currentTodos) =>
        currentTodos.map((currentTodo) =>
          currentTodo._id === todo._id ? response.data.data : currentTodo,
        ),
      );
      setEditingId(null);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Could not update the todo.",
      );
    } finally {
      setPendingId(null);
    }
  };

  const handleToggle = async (todo: Todo) => {
    setPendingId(todo._id);
    setError(null);
    try {
      const response = await axios.patch<ApiResponse<Todo>>(
        `${API_URL}/update-todo/${todo._id}`,
        { title: todo.title, completed: !todo.completed },
      );
      setTodos((currentTodos) =>
        currentTodos.map((currentTodo) =>
          currentTodo._id === todo._id ? response.data.data : currentTodo,
        ),
      );
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Could not update the todo.",
      );
    } finally {
      setPendingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    setPendingId(id);
    setError(null);
    try {
      const response = await axios.delete<ApiResponse<Todo[]>>(
        `${API_URL}/delete-todo/${id}`,
      );
      setTodos(response.data.data);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Could not delete the todo.",
      );
    } finally {
      setPendingId(null);
    }
  };

  const remainingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <main className="todo-page">
      <section className="todo-panel" aria-labelledby="page-title">
        <header className="todo-header">
          <p className="eyebrow">YOUR DAY, IN ORDER</p>
          <h1 id="page-title">My Todos</h1>
          <p className="todo-subtitle">
            {remainingCount === 1
              ? "1 task left to complete"
              : `${remainingCount} tasks left to complete`}
          </p>
        </header>

        <form className="add-form" onSubmit={handleAdd}>
          <label className="visually-hidden" htmlFor="new-todo">
            New todo
          </label>
          <input
            id="new-todo"
            type="text"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
            placeholder="What needs to get done?"
            maxLength={200}
          />
          <button type="submit" disabled={isAdding || !newTitle.trim()}>
            Add Todo
          </button>
        </form>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        {todos.length > 0 ? (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li
                className={`todo-item${todo.completed ? " is-complete" : ""}`}
                key={todo._id}
              >
                <input
                  className="todo-checkbox"
                  type="checkbox"
                  checked={todo.completed}
                  disabled={pendingId === todo._id}
                  onChange={() => void handleToggle(todo)}
                  aria-label={`Mark "${todo.title}" ${
                    todo.completed ? "incomplete" : "complete"
                  }`}
                />

                {editingId === todo._id ? (
                  <form
                    className="edit-form"
                    onSubmit={(event) => void handleUpdate(event, todo)}
                  >
                    <label
                      className="visually-hidden"
                      htmlFor={`edit-${todo._id}`}
                    >
                      Edit todo
                    </label>
                    <input
                      id={`edit-${todo._id}`}
                      autoFocus
                      value={editTitle}
                      onChange={(event) => setEditTitle(event.target.value)}
                      maxLength={200}
                    />
                    <button
                      className="action-button save-button"
                      type="submit"
                      disabled={pendingId === todo._id || !editTitle.trim()}
                    >
                      Save
                    </button>
                    <button
                      className="action-button cancel-button"
                      type="button"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    <span className="todo-title">{todo.title}</span>
                    <div className="todo-actions">
                      <button
                        className="action-button update-button"
                        type="button"
                        disabled={pendingId === todo._id}
                        onClick={() => {
                          setEditTitle(todo.title);
                          setEditingId(todo._id);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="action-button delete-button"
                        type="button"
                        disabled={pendingId === todo._id}
                        onClick={() => void handleDelete(todo._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">
              ✓
            </span>
            <h2>Nothing on your list</h2>
            <p>Add a todo above and it will show up here.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
