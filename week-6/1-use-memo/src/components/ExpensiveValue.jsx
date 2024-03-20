import React from 'react'
import { useMemo } from 'react';
function ExpensiveValue(input) {

    const factorial = useMemo(() =>{
        let firstValue = 0;
        let secondValue = 1;
       let sum =0;
        for (let i = 0; i < input; i++){
            sum = firstValue + secondValue;
            firstValue = secondValue;
            secondValue = sum;
        }
        console.log(sum);
        return sum
        
    },[input])
    console.log(factorial)
  return (
    <p>{factorial}</p>
  )
}

export default ExpensiveValue