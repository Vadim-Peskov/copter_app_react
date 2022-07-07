import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Container from './components/common/Container';
import { GlobalStyle } from './components/common/styledVariables';
import Home from './components/pages/Home';
import Characteristics from './components/pages/Characteristics';
import Cart from './components/pages/Cart';
import Error404 from './components/pages/Error404';


function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/characteristics" element={<Characteristics/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<Error404/>} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
