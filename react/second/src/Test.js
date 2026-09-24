import React from "react";

class Test extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
        this.state = {
            s1: 0
        };
    }

    buttonHender = () => {
        let val = this.state.s1;
        val++;
        this.setState({ s1: val });
    };

    componentDidMount() {
        console.log("Component Did Mount");
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }
    componentDidUpdate(){
        console.log("Component Did Update");
        
    }

    render() {
        console.log("Render 1");

        return (
            <>
                {console.log("Return 1")}
                <div>
                    <button onClick={this.buttonHender}>Push</button>
                </div>
                <div>{this.state.s1}</div>
            </>
        );
    }
}

export default Test;