import Article from '../article/Article';
import './App.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Nav from "../nav/Nav";

function App(props) {
  const { title, navigation, db, text } = props;

  return (
    <div className="App">
      <Header title={title} />
      <Nav navigation={navigation} />
      <Article db={db} />
      <Footer text={text}/>
    </div>
  );
}

export default App;