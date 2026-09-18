import React from "react";

class Footer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
    <footer style={{background:"red",padding:10,fontWeight:"bold"}}>
        <p>{this.props.text}</p>
      </footer>
   ) 
    }
   
}
export default Footer;