import { useState } from "react"

export default function Crecket(){
    const [run,setRun]=useState(0);
    const singleRun=()=>{
        let newRun=run+1;
        setRun(newRun);
    }
    const fourRun=()=>{
        let newRun=run+4;
        setRun(newRun);
    }
    const sixRun=()=>{
        let newRun=run+6;
        setRun(newRun);
    }
    return (
        <div>
            {
                run > 50 && <h2>You Done : Half-Cencury</h2>
            }
            <h3>Player Name : Lokman Hossen</h3>
            <h1>Runs : {run}</h1>
            <button onClick={singleRun}>Single</button>
            <button onClick={fourRun}>Four</button>
            <button onClick={sixRun}>Six</button>
        </div>
    )
}