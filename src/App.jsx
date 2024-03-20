import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Store from './components/Store';
import Home from './components/Home';
import AccountPage from './components/AccountPage';
import { ProductProvider } from '../src/context/ProductContext';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<AccountPage />} />
        </Routes>
        </ProductProvider>
      </div>
    </Router>
  );
};

export default App;


