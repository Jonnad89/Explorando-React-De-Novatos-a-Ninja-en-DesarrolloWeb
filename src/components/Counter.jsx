import React, { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const increment = () =>{
        setCounter(counter +1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );
};

export default Counter;