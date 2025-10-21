# Working with State

You're working on a part of an online shop where a **discounted price** should be displayed on the screen once the user clicks a button.

## Task

Your task is to add an **event listener** to listen for clicks on the button that's already included in the `App` component.

Upon a button click, the price should change from **$100** to **$75**.

Add a **state value** to the existing `App` component function and make sure the state value is both updated upon button clicks and output as part of the JSX code.

---

## 🧩 Solution

> Code is as per Udemy, so the import syntax may differ.

```jsx
import React from 'react';

export default function App() {
    const [productPrice, setProductPrice] = React.useState('$100');
    
    function applyDiscount() {
        setProductPrice('$75');
    }
    
    return (
        <div>
            <p data-testid="price">{productPrice}</p>
            <button onClick={applyDiscount}>Apply Discount</button>
        </div>
    );
}
