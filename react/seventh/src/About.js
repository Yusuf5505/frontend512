import { useState, useEffect } from "react"


function About() {
    let [potss, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, []);
    console.log(potss);
    
    return (
        <h1>About</h1>
    )
}
export default About