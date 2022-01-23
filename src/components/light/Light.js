import react, { useState } from "react";
import './Light.css';

let Light=({isON,toggle})=>{
    const[color,setcolor]=useState('url("https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg")');
    var buttonclick=()=>{
        isON==='ON'?setcolor('url("https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg")'):setcolor('url("https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg")');
        toggle()
       }
       
    return(
        <div>
            <div className="Light1" style={{backgroundImage:color}}></div>
            <button onClick={buttonclick}>{isON}</button>
        </div>
    )
}

export default Light;