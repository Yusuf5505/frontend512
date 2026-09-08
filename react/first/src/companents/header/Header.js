import logo from './logo.svg';
import "./Header.css";
function Header(props) {
  
  let a=77;
  let slogan=`I am learning React`;
     return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{props.title}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{slogan}</p>
      </header>
    )
} 
export default Header;