# Using Fragments

Your task is to edit the existing **`Summary`** component so that it outputs the following content:

```html
<h1>Summary</h1>
<p>{text}</p>
````

---

## 🎯 Task Details

Inside the `Summary` component, this content **must not be wrapped** by any other HTML element.

For example, this code would be **incorrect**:

```jsx
<div>
  <h1>Summary</h1>
  <p>{text}</p>
</div>
```

Instead, you should use **React Fragments (`<>...</>`)** to avoid adding unnecessary wrapper elements.

---

## 🧩 Starter Code

```jsx
function Summary({ text }) {
  return null;
}

function App() {
  return (
    <div id="app" data-testid="app">
      <Summary text="Fragments help you avoid unnecessary HTML elements." />
    </div>
  );
}

export default App;
```

---

## ✅ Solution

```jsx
function Summary({ text }) {
  return (
    <>
      <h1>Summary</h1>
      <p>{text}</p>
    </>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <Summary text="Fragments help you avoid unnecessary HTML elements." />
    </div>
  );
}

export default App;
```

---

### 💡 Notes

* `<>...</>` is a **short syntax** for `React.Fragment`, allowing you to group multiple elements **without extra DOM nodes**.
* Fragments help maintain a **clean HTML structure** and are especially useful when returning multiple sibling elements from a component.