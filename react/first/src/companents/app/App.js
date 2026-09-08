import Article from '../article/Article';

import './App.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';


function App() {
  return (
    <div className="App">
      <Header  title='My site' />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
