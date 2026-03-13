import { useState } from "react"

export default function Counter(){
const [count,setvalue]=useState(0);
 const handelcount =()=>{
    let newCount=count+1;
    setvalue(newCount)
 }
    const counterStyle={
        border:'2px solid green' ,
        padding:'23px'
    }
    return (
        <div style={counterStyle}>
            <h3>Count : {count}</h3>
            <button onClick={handelcount}>ADD</button>
        </div>
    )
}