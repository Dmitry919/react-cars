import React from 'react';
import Driver from './components/Driver/Driver';
import Find from './components/Find/Find';
import Footer from './components/footer/Footer';
import Hero from './components/Hero/Hero';
import Luxury from './components/luxury/Luxury';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
          <NavBar />
          <Hero />
          <Find />
          <Driver />
          <Luxury />
          <Footer />
    </div>
  );
}

export default App;
