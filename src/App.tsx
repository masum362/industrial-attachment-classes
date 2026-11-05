import { useState, type SubmitEvent } from "react";

interface task {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskTitle.trim() === "") {
      return;
    }

    const newTask: task = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskTitle("");
  };


  const handleDelete = (taskId:number) =>{
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  const handleCompleted = (taskId:number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900 sm:py-20">
      <main className="mx-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200 sm:p-8">
        <header className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Stay on track
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Task Manager
          </h1>
          <p className="mt-2 text-slate-500">
            Keep your day organized, one task at a time.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="mb-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            placeholder="Enter a task..."
            aria-label="Enter a task"
            className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add Task
          </button>
        </form>

        <section aria-label="Tasks">
          <h2 className="mb-3 text-sm font-semibold text-slate-500">
            YOUR TASKS
          </h2>
          <ul className="space-y-3">
            {tasks.map((task) => {
              return (
                <li className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-indigo-200 hover:bg-indigo-50/40">
                  <input type="checkbox" checked={task.completed} onChange={() => handleCompleted(task.id)} />
                  <span className={task.completed ? "line-through text-slate-500" : "font-medium"}>
                    {task.title}
                  </span>
                  <button
                  onClick={() =>handleDelete(task.id)}
                    type="button"
                    className="rounded-lg px-3 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-50 hover:text-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
