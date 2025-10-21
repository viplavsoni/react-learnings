````markdown
# Dynamic List Content

You're working on a **"Todo List"** web app, and your task is to output a list of dummy todo items **dynamically**.  

A `Todo` component has been prepared for you — however, you must still add some code to it to **receive and output the todo text**.

---

## 🎯 Task Details

In the `App` component, transform the `DUMMY_TODOS` array (provided below — **do not modify it**) into a list of JSX elements (`<Todo>` components).

Each `Todo` component should:
- Receive a prop called `text`
- Display that text inside a `<li>` element

---

## 🧩 Starter Code

### `App.js`
```jsx
import React from 'react';

import Todo from './Todo'

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
  
}
````

### `Todo.js`

```jsx
import React from 'react';

export default function Todo() {
    return <li>...</li>;
}
```

---

## ✅ Solution

### `App.js`

```jsx
import React from 'react';

import Todo from './Todo'

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
  return (
      <ul>
        {DUMMY_TODOS.map((item) => <Todo text={item} />)}
      </ul>
  );
}
```

---

### `Todo.js`

```jsx
import React from 'react';

export default function Todo({ text }) {
    return <li>{text}</li>;
}
```

---

### `index.css`

```css
body {
    font-family: sans-serif;
    margin: 0;
    padding: 3rem;
    background-color: #2d2c2c;
    color: #959090;
    text-align: center;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
    margin: 1rem;
    padding: 1rem;
    background-color: #8567fd;
    color: white;
    border: 2px solid #8567fd;
    border-radius: 6px;
}
```

---

### 💡 Notes

* The `DUMMY_TODOS` array provides static values that are rendered dynamically using `.map()`.
* Each `<Todo>` component is reusable and displays the `text` prop.
* CSS ensures a **clean and colorful UI** for each todo item.

```