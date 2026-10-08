# React Practice & Evaluation Tasks

এই ৫টি Task-এর মাধ্যমে React-এর শেখানো বিষয়গুলো Practice এবং Self-Evaluation করতে হবে।

---

## Task 1 — Student Management System

একটি ছোট **Student Management App** তৈরি করো।

### Features

* Student list দেখাবে
* নতুন student add করা যাবে
* Student delete করা যাবে
* Student-এর name, email এবং department দেখাবে
* Student না থাকলে empty message দেখাবে
* Form validation থাকবে

### Must Use

* Components
* Props
* `useState`
* Event Handling
* Forms
* Conditional Rendering
* Lists & Keys

---

## Task 2 — Product Cart

একটি simple **Shopping Cart Application** তৈরি করো।

### Features

* ৬টি product দেখাবে
* `Add to Cart` button থাকবে
* Cart-এ product-এর quantity দেখাবে
* Quantity increase/decrease করা যাবে
* Product remove করা যাবে
* Total price দেখাবে
* Cart empty হলে message দেখাবে

### Must Use

* Props
* `useState`
* Array State Update
* `map()`
* Conditional Rendering
* `useReducer`

### Extra Challenge

Cart state `Context API` ব্যবহার করে manage করার চেষ্টা করো।

---

## Task 3 — User Dashboard

একটি **User Dashboard** তৈরি করো যেখানে Login এবং Logout system থাকবে।

### Features

* Login form থাকবে
* Login করলে Dashboard দেখাবে
* Logout button থাকবে
* Navbar-এ user's name দেখাবে
* Profile section-এ user's information দেখাবে
* Logout করলে আবার Login page দেখাবে

### Must Use

* Components
* Props
* Forms
* `useState`
* `useContext`
* Conditional Rendering

### Suggested Structure

```text
App
 └── UserProvider
      ├── Navbar
      ├── Login
      └── Dashboard
           └── Profile
```

---

## Task 4 — User Search & Filter App

API থেকে user data নিয়ে একটি **User Search & Filter Application** তৈরি করো।

### Application Flow

```text
API
 ↓
Loading
 ↓
Users
 ↓
Search / Filter
 ↓
User Cards
```

### Features

* API থেকে users load করবে
* Loading state দেখাবে
* API error হলে error message দেখাবে
* User না থাকলে empty message দেখাবে
* Name দিয়ে search করা যাবে
* Email দিয়ে filter করা যাবে
* Reusable `UserCard` component থাকবে

### Must Use

* `useEffect`
* `useState`
* `fetch()`
* Props
* Lists & Keys
* Conditional Rendering
* Controlled Input

---

# Task 5 — Mini Task Management App

এটি হবে **Final React Practice & Evaluation Task**।

একটি ছোট **Task Management Application** তৈরি করো।

## 1. Add Task

একটি form তৈরি করো যেখানে থাকবে:

* Task Title
* Description
* Priority
* Add Task button

---

## 2. Task Management

প্রতিটি task-এর জন্য:

* Task দেখাবে
* Completed / Pending status দেখাবে
* Task complete করা যাবে
* Task delete করা যাবে
* Task edit করা যাবে

---

## 3. Task Filter

নিচের filter options থাকবে:

```text
All
Pending
Completed
```

---

## 4. UI States

Application-এ বিভিন্ন state handle করতে হবে।

### Empty State

কোনো task না থাকলে:

```text
No tasks available
```

### Form Error

Invalid input হলে validation message দেখাবে।

### Task List

Task থাকলে সুন্দরভাবে task cards দেখাবে।

---

## 5. State Management

Task-এর state management-এর জন্য অবশ্যই:

```text
useReducer
    +
useContext
```

ব্যবহার করতে হবে।

---

## Suggested Component Structure

```text
App
 └── TaskProvider
      ├── Navbar
      ├── TaskForm
      ├── TaskFilter
      ├── TaskList
      │    └── TaskCard
      └── Footer
```

---

# Concepts Checklist

Taskগুলো করার সময় নিচের React concepts ব্যবহার করার চেষ্টা করো:

* [ ] JSX
* [ ] Functional Components
* [ ] Component Composition
* [ ] Props
* [ ] `children`
* [ ] Parent → Child Communication
* [ ] Child → Parent Communication
* [ ] Conditional Rendering
* [ ] Lists & Keys
* [ ] `useState`
* [ ] State Immutability
* [ ] Event Handling
* [ ] Forms
* [ ] Form Validation
* [ ] `useEffect`
* [ ] `useRef`
* [ ] `useContext`
* [ ] `useReducer`

---

# Rules

1. প্রতিটি Task নিজে করার চেষ্টা করতে হবে।
2. সরাসরি অন্যের code copy করা যাবে না।
3. Component ছোট এবং reusable রাখার চেষ্টা করতে হবে।
4. একই component-এর মধ্যে সব code লিখবে না।
5. Proper component structure maintain করতে হবে।
6. Meaningful variable এবং component names ব্যবহার করতে হবে।
7. Console error ছাড়া application চালানোর চেষ্টা করতে হবে।
8. প্রতিটি Task GitHub repository-তে push করার চেষ্টা করতে হবে।

---

# Final Goal

এই ৫টি Task শেষ করার পর তোমার লক্ষ্য হবে:

> **"আমি React-এর basic concepts বুঝে নিজে একটি ছোট application তৈরি করতে পারি।"**

বিশেষ করে **Task 5** সম্পূর্ণ নিজে করার চেষ্টা করো। এটি React শেখার পর তোমার বর্তমান skill level যাচাই করার জন্য ব্যবহার করা হবে।
