import { useState } from "react";
import { useMemo } from "react";
// import ExpensiveValue from "./ExpensiveValue";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const finalValue = useMemo(() =>{
        let expensiveValue = 1;
        for(let i = 1; i <= input; i++){
            expensiveValue = expensiveValue * i;
    }
    return expensiveValue
    } ,[input])
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            {/* <ExpensiveValue input = {input}/> */}
            <p>Calculated Value: {finalValue}</p>
        </div>
    );
}