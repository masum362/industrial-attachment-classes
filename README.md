# TypeScript Assignment
## Project: Student Management System

### Project Objective
Build a Student Management System using **Vanilla TypeScript** and **React + TypeScript**. This assignment will help you practice TypeScript fundamentals and understand how to use TypeScript in real-world applications.

---

## Student Interface

Use the following interface to manage student information:

```ts
interface Student {
  id: number;
  name: string;
  email: string;
  age: number;
  department: string;
  isActive: boolean;
}
```

## Task 1: Student Data Management (Vanilla TypeScript)

Create a student management system using HTML, CSS, and Vanilla TypeScript.

Requirements:

- Create an array of students using the `Student` interface.
- Create a function to add a new student.
- Create a function to update student information.
- Create a function to delete a student by ID.
- Create a function to find a student by ID.
- Display all students in the browser.
- Use proper TypeScript types for function parameters and return values.

## Task 2: Search and Filtering (Vanilla TypeScript)

Implement search and filtering functionality.

Requirements:

- Search students by name.
- Filter students by department.
- Filter students by active/inactive status.
- Display a message when no students are found.
- Use array methods such as `filter()`, `find()`, and `map()`.

## Task 3: TypeScript Concepts Practice

Improve your code by implementing the following TypeScript concepts:

- Create a `Department` union type.
- Use optional properties in an interface.
- Use `type` and `interface` appropriately.
- Create a function with multiple parameter types.
- Use Type Guards where necessary.
- Avoid using `any`.
- Handle potentially undefined student data safely.

## Task 4: Student Management System (React + TypeScript)

Rebuild the Student Management System using React and TypeScript.

Create the following components:

| Component | Responsibility |
|---|---|
| App | Main application |
| StudentForm | Add and edit students |
| StudentList | Display all students |
| StudentCard | Display individual student information |
| SearchBar | Search students |
| FilterBar | Filter students |

Requirements:

- Use interfaces to define component props.
- Use `useState` with proper TypeScript types.
- Use `useEffect` where necessary.
- Handle form events with proper event types.
- Implement Add, Edit and Delete functionality.
- Pass data between components using props.
- Maintain type safety throughout the application.

## Task 5: Advanced Features (Bonus)

Implement the following additional features:

1. Save student data in LocalStorage.
2. Load student data from LocalStorage when the application starts.
3. Display total student count.
4. Display active and inactive student counts.
5. Create a student details modal.
6. Add a button to toggle student active/inactive status.
7. Implement form validation.
8. Add a confirmation message before deleting a student.

---

## Project Requirements

- Use TypeScript in both implementations.
- Create separate folders for Vanilla TypeScript and React + TypeScript.
- Maintain a clean and organized folder structure.
- Do not use `any` unless absolutely necessary.
- Avoid TypeScript errors.
- Use meaningful variable and function names.
- Make the application responsive for mobile and desktop.

## Submission Guidelines

- Upload your project to GitHub.
- Include a `README.md` file.
- Provide screenshots of your application.
- Share your GitHub repository link.
- Deploy the React version and provide the live URL.

## Evaluation Criteria

| Criteria | Marks |
|---|---:|
| TypeScript Fundamentals | 20 |
| CRUD Functionality | 20 |
| Search & Filtering | 10 |
| React Components & Props | 15 |
| State Management | 15 |
| Code Quality & Structure | 10 |
| UI/UX & Responsiveness | 10 |
| **Total** | **100** |

**Important:** Complete all tasks in order. Focus on understanding TypeScript concepts rather than just making the application work.