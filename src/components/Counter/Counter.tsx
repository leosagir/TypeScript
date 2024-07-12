import React, { useState } from "react";
import './Counter.css'

export default function Counter() {
    // Указываем тип состояния (number)
    const [count, setCount] = useState<number>(0);

    const handlePlus = () => {
        setCount((prev) => prev + 1);
        console.log(count);
    };

    const handleMinus = () => {
        setCount((prev) => prev - 1);
        console.log(count);
    };

    return (
        <div className="lesson-container">
            <h4>Counter</h4>
            <button onClick={handleMinus}>-</button>
            <span>{count}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    );
}