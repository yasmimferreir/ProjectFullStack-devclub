import './App.css';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import home from './pages/Home/home';
import QuemSomos from './pages/Quemsomos/quemsomos';
import Parceiros from './pages/Parceiros/parceiros';
import Contato from './pages/contato/contato';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={ home } />
          <Route path='/quemsomos' element={ QuemSomos } />
          <Route path='/parceiros' element={ Parceiros } />
          <Route path='/contato' element={ Contato } />
        </Routes>

      </Router>






      <Navbar />
      <Home />
    </>

  );
}

export default App;
