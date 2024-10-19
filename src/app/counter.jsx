import { useState } from "react";

const Counter=()=>{
    const[num, setNum]=useState(1);// num change garna lai state banako 
    const handleAdd=()=>{
        setNum(num+1);
    }

    const handleMinus=()=>{
        setNum(num-1);
    }

    return(
        <div>
            <h1> {num}</h1>;
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleMinus}> Minus</button>
        </div>
    )
}

const trafficLight=()=>{
    const[light, setNum]= useState("yellow");
    const handleRed=()=>{
        setNum("Red");
    }
    const handleYellow=()=>{
        setNum("Yellow");
    }
    const handleGreen=()=>{
        setNum("Green");
    }

    return(
        <div>
            <h1>{light}</h1>
            <button onClick={handleRed}> Red</button>
            <button onClick={handleYellow}> Yellow</button>
            <button onClick={handleGreen}> Green</button>

        </div>
    
    )
}
export {Counter};