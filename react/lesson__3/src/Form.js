import { useState } from "react";
function Form(props){
    let [values,setValues]=useState("");
    let{addTask}=props;
    console.log(values);
    let setSumbit=e=>{
        e.preventDefault();
        addTask(values);
        setValues('')
    }
    return(
        <div>
            <form onSubmit={setSumbit}>
                <input type="text" 
                className="input"
                value={values}
                onChange={e=>setValues(e.target.value)}/>
            </form>
        </div>
    )
}
export default Form;