import { useState,useEffect } from "react";
function Counter() {
    let [cnt, setCnt] = useState(0);
    let decrement=() => setCnt(cnt -1);
    let icrement=() => setCnt(cnt +1);
    useEffect(() =>{
        console.log("Heloo from Counter",cnt);
        return()=>console.log("Goodbay Counter");
        
    },[cnt])
    return (
        <div>
            <h2>Счетчик:</h2>
            <h1>{cnt}</h1>
            <button onClick={decrement}>- Минус</button>
            <button onClick={icrement}>+ Плюс</button>
        </div>
    )
}
export default Counter;