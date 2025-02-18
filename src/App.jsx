import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import NavbarComponent from './Components/NavbarComponent';
import ProductDetails from './Components/ProductDetails';
import FooterComponent from './Components/FooterComponent';
import AddProduct from './Components/AddProduct';
import Cart from './Components/cart';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';

function App() {
  return (
    <Router basename='/vsg-agro-react'>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
