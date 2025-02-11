import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'; 
import Products from './Components/Products';
import NavbarComponent from './Components/NavbarComponent';
import ProductDetails from './Components/ProductDetails';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <Router basename='/vsg-agro-react'>
     <NavbarComponent />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
