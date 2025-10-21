# Conditional Content

You're working on a part of a web app that's responsible for showing a **warning** when a user is about to perform a dangerous action.

## Task

Your task is to **conditionally show a warning box** once a user has clicked a specific button.  
Inside that warning dialog, another button allows users to **dismiss the warning** (i.e., remove the warning box from the screen).

---

### Expected UI Flow

#### 1️⃣ Before Clicking the Button
When the `<button>` has **not** been clicked yet, the UI should display only the main button.

#### 2️⃣ After Clicking the Button
Once the button is clicked, a **warning box** (`<div id="alert">`) should appear with the following content:
- A warning message
- A "Proceed" button to dismiss the warning

#### 3️⃣ After Clicking "Proceed"
Once the **"Proceed"** button is clicked, the warning box should disappear again.

---

### Requirements

- You must react to clicks on **both `<button>` elements** that are part of the starting code.
- The **outer button** (outside `<div id="alert">`) should show the warning box.
- The **inner button** (inside `<div id="alert">`) should hide it again (i.e., remove it from the DOM).
- You may use a **ternary expression** or store the conditionally shown JSX in a variable.

---

## 🧩 Starter Code

```jsx
import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
    return (
      <div>
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button>Proceed</button>
        </div>
        <button>Delete</button>
      </div>    
    );
}
````

---

## ✅ Solution

```jsx
import React from 'react';

export default function App() {
    const [confirmation, setConfirmation] = React.useState(false);
    
    function clickedConfirm() {
        setConfirmation(!confirmation);
    }
    
    return (
      <div>
        {
            confirmation ? (
              <div data-testid="alert" id="alert">
                <h2>Are you sure?</h2>
                <p>These changes can't be reverted!</p>
                <button onClick={clickedConfirm}>Proceed</button>
              </div>
            ) : (
              <button onClick={clickedConfirm}>Delete</button>
            )
        }
      </div>    
    );
}
```