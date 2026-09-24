import React from "react";

class Hello extends React.Component {
    state = {
        hello: "Hello"
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({hello:''})
        },2000)
    }
    render() {
        return (
            <>
                <h1>{this.state.hello}</h1>
                <button onClick={()=>{this.setState({hello:"Hello"})}}>Показать</button>
                <button onClick={()=>{this.setState({hello:""})}}>Скрыть</button>
              
            </>
        )
    }
}

export default Hello;