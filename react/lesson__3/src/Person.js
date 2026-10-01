import { useState } from "react";
function Person(){
    let [person,setPerson]=useState({
        firstName:"Yusuf",
        lastName:"Saiganov"
});

    function rename(){
        setPerson({  ...person ,firstName:"ibrahim"})
    }
    return(
        <div>
            <hr />
<p>{person.firstName} {person.lastName}</p>
<button onClick={rename}>Rename</button>
        </div>
    )
}
export default Person;