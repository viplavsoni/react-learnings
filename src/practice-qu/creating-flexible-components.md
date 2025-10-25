# Creating Flexible Components

Your task is to build a **highly re-usable, custom Button component** that can be used in multiple ways (see examples below and in the `App.js` file).

---

## 🎯 Task Details

### 1️⃣ "Filled" Mode (Default)

```jsx
<Button>Default</Button>
````

or

```jsx
<Button mode="filled">Filled</Button>
```

These should yield a **filled-style button**.

---

### 2️⃣ "Outline" Mode

```jsx
<Button mode="outline">Outline</Button>
```

This should yield a **button with an outline**.

---

### 3️⃣ "Text-only" Mode

```jsx
<Button mode="text">Text</Button>
```

This should yield a **text-only button**.

---

### 4️⃣ Button with Icon

```jsx
<Button Icon={HomeIcon}>Home</Button>
```

or

```jsx
<Button Icon={PlusIcon} mode="text">
  Add
</Button>
```

These should yield buttons that include an **icon** beside the text.

---

## 💡 Hint

* To make the icon visible, wrap it in a `<span>` with the class `"button-icon"`.
* Wrap the `children` prop in a `<span>` as well.
* All required CSS classes are defined in `index.css`.
* Every button should have a base `"button"` class, and then additional classes based on its mode (`filled`, `outline`, or `text`).
* The component should **forward all props** to the underlying `<button>` element.
* If no mode is specified, default to `"filled"`.

---

## 🧩 Starter Code

### `App.js`

```jsx
import Button from './Button';
import HomeIcon from './HomeIcon';
import PlusIcon from './PlusIcon';

function App() {
  return (
     <div id="app">
      <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button mode="filled">Filled (Default)</Button>
        </p>
      </section>
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode="outline">Outline</Button>
        </p>
      </section>
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button mode="text">Text</Button>
        </p>
      </section>
      <section>
        <h2>Button with Icon</h2>
        <p>
          <Button Icon={HomeIcon}>Home</Button>
        </p>
        <p>
          <Button Icon={PlusIcon} mode="text">
            Add
          </Button>
        </p>
      </section>
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <p>
          <Button mode="filled" disabled>
            Disabled
          </Button>
        </p>
        <p>
          <Button onClick={() => console.log('Clicked!')}>Click me</Button>
        </p>
      </section>
    </div>
  );
}

export default App;
```

---

### `Button.js`

```jsx
export default function Button() {
 // Todo: Build this component!
 
 // !!! Important: 
 // Wrap the icon with a <span className="button-icon"> to achieve the target look
 // Also wrap the children prop with a <span>
}
```

---

## ✅ Solution Explanation

The solution builds the `Button` component step-by-step.

---

### Step 1: Add Default Mode

Extract the `mode` prop and assign it a default value of `'filled'`.
Then dynamically build the CSS class string.

```jsx
export default function Button({ children, mode = 'filled'}) {
  let cssClasses = `button ${mode}-button`;
 
  return <button className={cssClasses}>{children}</button>;
}
```

---

### Step 2: Forward All Props

Use the rest property syntax (`...props`) to collect and spread all remaining props.

```jsx
export default function Button({ children, mode = 'filled', ...props}) {
  let cssClasses = `button ${mode}-button`;
 
  return <button className={cssClasses} {...props}>{children}</button>;
}
```

---

### Step 3: Handle `className` Merging

Ensure that any custom `className` prop passed to the component merges correctly with internal classes.

```jsx
export default function Button({ children, className, mode = 'filled', ...props}) {
  let cssClasses = `button ${mode}-button`;
 
  if (className) {
    cssClasses += ' ' + className;
  }
 
  return <button className={cssClasses} {...props}>{children}</button>;
}
```

---

### Step 4: Support Icons

Extract the `Icon` prop (capital “I” because it holds a component reference).
If an `Icon` is provided, append the `icon-button` class and render the icon wrapped in a `<span>`.

```jsx
export default function Button({ children, className, mode = 'filled', Icon, ...props}) {
  let cssClasses = `button ${mode}-button`;
 
  if (Icon) {
    cssClasses += ' icon-button';
  }
 
  if (className) {
    cssClasses += ' ' + className;
  }
 
  return (
    <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
```

---

## 🧠 Key Takeaways

* **Default Props:** Use `mode = 'filled'` to define a fallback style.
* **Prop Forwarding:** `{...props}` ensures all standard button attributes (e.g. `onClick`, `disabled`) are passed along.
* **Class Merging:** Always merge user-defined and internal classes.
* **Icons:** Icons should be optional and neatly integrated using `<span className="button-icon">`.
* **Reusability:** This single `Button` component can handle all visual modes and variations.
