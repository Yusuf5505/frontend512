import React from "react";
class Form extends React.Component {
    state = {
        firstName: "",
        email: ""
    };
    update = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })
    }
    update1 = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    render() {
        const{}= this.state;
        return (
            <>
                <form >
                    <hr />
                    <input value={this.state.firstName} name='firstName'onChange={this.update} />
                    <input value={this.state.email} name='email'onChange={this.update1} />
                </form>
                <hr />
                <p>{this.state.firstName}</p>
                <p>{this.state.email}</p>
            </>
        )
    }

}

export default Form;