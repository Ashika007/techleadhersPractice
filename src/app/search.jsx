// import React from"react";
import React, {useState} from "react";

export default function Search(){
    const[text, setText]= useState("")

    const handleTextChange=(event)=>{
        console.log(event);
       
    };
    return(
        <div>
            <h1>{text}</h1>
            <input type="text" value={text} onChange={handleTextChange}/>
        </div>
    );
}