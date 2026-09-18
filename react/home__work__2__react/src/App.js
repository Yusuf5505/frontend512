import './App.css';
import Header from './Header/Header';
import Nav from './nav/Nav';
import Main from './main/Main';
import Section from './section/Section';
import Footer from './Footer/Footer';

function App(props) {
  let {nav,bio,bio2,bio3,bio4 ,quotes,quotes2, quotes3, foot}=props;
  return (
    <>
      <Header />
      <Nav nav={nav} />
      <Main bio={bio} bio2={bio2} bio3={bio3} bio4={bio4} quotes={quotes}/>
      <Section quotes={quotes} quotes2={quotes2} quotes3={quotes3} />
      <Footer  foot={foot}/>
    </>
  );
}

export default App;