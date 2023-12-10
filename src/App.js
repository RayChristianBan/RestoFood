import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Letter from './components/Letter';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Letter />
      <Footer />
      <Cards />
    </div>
  );
}

export default App;