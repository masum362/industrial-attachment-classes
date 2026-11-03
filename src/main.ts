// interface Person {
//   id:number;
//   name: string;
//   age: number;
//   location?: string;
// }

// const person1: Person = {
//   name: "humayun",
//   age: 21,
// };

// const person2: Partial<Person> = {
//   name: "Tahiba",
// };

// const person3: Required<Person> = {
//   name: "rimon",
//   age: 20,
//   location: "moulvibazar",
// };

// console.log(person3);

// const users: Person[] = [
//   {id:1, name: "Humayun", age: 21, location: "Dhaka" },
//   {id:2, name: "Tahiba", age: 20, location: "Sylhet" },
//   {id:3, name: "Rimon", age: 22, location: "Moulvibazar" },
//   {id:4, name: "Ayesha", age: 19, location: "Chittagong" },
//   {id:5, name: "Sakib", age: 23, location: "Rajshahi" },
//   {id:6, name: "Nusrat", age: 21, location: "Khulna" },
//   {id:7, name: "Farhan", age: 24, location: "Barishal" },
//   {id:8, name: "Mim", age: 20, location: "Rangpur" },
//   {id:9, name: "Tanvir", age: 22, location: "Comilla" },
//   {id:10, name: "Jannat", age: 18, location: "Sylhet" },
// ];

// const userMap = new Map<number, Person>();

// users.forEach(user => userMap.set(user.id, user));

// console.log(userMap)

// if (userMap.has(3)) {
//   const user3 = userMap.get(3);
//   console.log(user3);
// } else {
//   console.log("User with ID 3 not found.");
// }

// const nameAgeMap:Record<string,number> = {
//   "Humayun": 21,
//   "Tahiba": 20,
//   "Rimon": 22,
//   "Ayesha": 19,
//   "Sakib": 23,
// }
// console.log(nameAgeMap)

// import result,{ thirddvalue,secondvalue} from './counter'

// console.log(result)

// interface Person {
//   name: string;
//   age: number;
//   location?: string;
// }

// const person4: Omit<Person,"age" | "location"> = {
//   name: 'Bob',
//   // `Omit` has removed age and location from the type and they can't be defined here
// };

// console.log(person4)

const taskForm = document.getElementById("task-form") as HTMLFormElement;
const taskInput = document.getElementById("task-input") as HTMLInputElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;

const TASKS_STORAGE_KEY = "tasks";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

let tasks: Task[] = loadTasks();

function loadTasks(): Task[] {
  return JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY) || "[]");
}

function saveTasks(): void {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}

function handleFormSubmit(e: SubmitEvent): void {
  e.preventDefault();

  const value = taskInput.value.trim();
  const task: Task = {
    id: crypto.randomUUID() ? crypto.randomUUID() : Date.now().toString(),
    title: value,
    completed: false,
  };
  tasks.unshift(task);
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

function renderTasks(): void {
  taskList.innerHTML = "";

  tasks.forEach((task: Task) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="task-left">
      <input type="checkbox" data-id="${task.id}" class="task-checkbox" ${task.completed ? "checked" : ""} />
      <span class="task-title ${task.completed ? "done" : ""}" >${task.title}</span>
      <button class="btn-delete" data-id="${task.id}">Delete</button>
    </div>
  `;

    taskList.appendChild(li);
  });
}

taskList.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains("task-checkbox")) {
    const taskId = target.getAttribute("data-id");
    tasks.forEach((task: Task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
    });
  } else if (target.classList.contains("btn-delete")) {
    const taskId = target.getAttribute("data-id");
    tasks = tasks.filter((task: Task) => task.id !== taskId);
  }

  console.log(tasks)
  saveTasks();
  renderTasks();
});

taskForm.addEventListener("submit", handleFormSubmit);

renderTasks();
