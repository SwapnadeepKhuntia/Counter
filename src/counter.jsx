import "./counter.css";
import {useState} from "react";
function Counter(){
     const [x,setx]=useState(0);
    return (
        <>
       <div className='counterbox'>
          <h1>{x}</h1>
          <div>
            <button onClick={()=>{setx(x-1)}}>Decrement</button>
            <button onClick={()=>{setx(x+1)}}>Increment</button>
          </div>
       </div>
        </>
    )
}

export default Counter;