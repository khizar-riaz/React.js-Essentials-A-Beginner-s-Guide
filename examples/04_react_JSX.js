import React, { useState } from 'react';

// Functional component using hooks
const Counter = () => {
    // State hook to manage the count state
    const [count, setCount] = useState(0);

    // Event handler to increment the count
    const handleIncrement = () => {
        setCount(count + 1);
    };

    // JSX template for the component
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

// Example usage of the Counter component
const App = () => {
    return (
        <div>
            <h1>React JSX Example</h1>
            <Counter />
        </div>
    );
};

export default App;
