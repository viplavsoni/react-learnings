# Dynamic Styling

Your task is to **dynamically apply a CSS class** (`active`) to the `<p>Style me</p>` element in the provided React app.

The class should be applied when the `<button>` is clicked **for the first time**.

---

## 🧩 Starter Code

```jsx
import React from 'react';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <p>Style me!</p>
            <button>Toggle style</button>
        </div>
    );
}
````

---

## ✅ Solution

```jsx
import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [selected, setSelected] = React.useState(false);
    
    function toggleHandler() {
        setSelected(!selected);
    }
    
    return (
        <div>
            <p className={selected && 'active'}>Style me!</p>
            <button onClick={toggleHandler}>Toggle style</button>
        </div>
    );
}
```

---

### 💡 Notes

* The `active` CSS class is applied **conditionally** based on the component's state.
* The `toggleHandler()` function flips the `selected` state value each time the button is clicked.
* You can define the `.active` class in your CSS file, for example:

```css
.active {
  color: red;
  font-weight: bold;
}
```
