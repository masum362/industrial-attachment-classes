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
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;