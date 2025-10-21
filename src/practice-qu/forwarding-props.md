# Forwarding Props

Your task is to work on the **`Input`** component such that it either returns a `<textarea>` element or an `<input>` element, depending on whether a `richText` prop set on `Input` is `true` or `false`.

---

## 🎯 Task Details

- If used like this:
  ```jsx
  <Input richText />
````

The `Input` component should render a `<textarea>` element.

* Otherwise, it should render an `<input>`:

  ```jsx
  <Input type="text" placeholder="Your name" />
  ```

* In addition, the `Input` component should **forward all other props** directly to the returned `<textarea>` or `<input>` elements.

---

## 🧩 Starter Code

### `App.jsx`

```jsx
import Input from './Input';

function App() {
  return (
    <div id="content">
      <Input type="text" placeholder="Your name" />
      <Input richText placeholder="Your message" />
    </div>
  );
}

export default App;
```

---

### `Input.jsx`

```jsx
export default function Input() {
  // return a <textarea> if a richText prop is true
  // return an <input> otherwise
  // forward / set the received props on the returned elements
}
```

---

## ✅ Solution

### `Input.jsx`

```jsx
export default function Input({...props}) {
  // return a <textarea> if a richText prop is true
  // return an <input> otherwise
  // forward / set the received props on the returned elements
  return (<input {...props}/>)
}
```

---

### 💡 Notes

* The component **forwards props** using the spread operator `{...props}`.
* The `Input` component can now be used with any valid input or textarea attributes.
* You can enhance it later by checking for a `richText` prop to return a `<textarea>`.