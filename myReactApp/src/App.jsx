import React, { useState } from "react";
import "./index.css";

function App() {
    const [counter, setCounter] = useState(0);

    const increaseValue = () => {
        setCounter(counter + 1);
    };

    const decreaseValue = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            alert("Counter can't go less than zero");
        }
    };

    return (
        <>  
            <div className=" min-h-screen flex items-center justify-center">
                <div className="p-6 border-black">
                    <h1>MY FIRST REACT PROJECT</h1>
                    <button onClick={increaseValue}>+</button>
                    <h2>counter: {counter}</h2>
                    <button onClick={decreaseValue}>-</button>
                </div>
            </div>
        </>
    );
}

export default App;
