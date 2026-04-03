import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Hero from './components/sections/Hero/Hero';
import ShopByCategory from './components/sections/ShopByCategory/ShopByCategory';
import FeaturesSection from './components/sections/FeaturesSection/FeaturesSection';
import Footer from './components/layout/Footer/Footer';
import Login from './components/sections/Login/Login';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ShopByCategory />
              <FeaturesSection />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
