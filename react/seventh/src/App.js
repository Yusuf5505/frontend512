import { Routes, Route } from 'react-router-dom';
import Layount from './components/Layount';
import './App.css';
import Home from './Home';
import Articles from './Articles';
import About from './About';
import Abouthinfo from './Abouthinfo';



function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Layount />}>
          <Route path="/" index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path='/About/:id' element={<Abouthinfo />} />
          <Route path="/Articles" element={<Articles />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;