import { useState } from "react";

const TrafficLight=()=>{
    const[light, setNum]= useState("yellow");

    const handleLight =(changeLight)=>{
        setNum(changeLight);
    };
    // const handleRed=()=>{
    //     setNum("Red");
    // }
    // const handleYellow=()=>{
    //     setNum("Yellow");
    // }
    // const handleGreen=()=>{
    //     setNum("Green");
    // }

    return(
        <div>
            <h1>{light}</h1>
            {/* <button onClick={handleRed}> Red</button>
            <button onClick={handleYellow}> Yellow</button>
            <button onClick={handleGreen}> Green</button> */}

            <button onClick={()=> handleLight("red")}>Red</button>
            <button onClick={()=> handleLight("yellow")}>Yellow</button>
            <button onClick={()=> handleLight("green")}>Green</button>

        </div>
    
    )
}
export default TrafficLight;