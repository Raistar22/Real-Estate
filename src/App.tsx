import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import PropertyDetail from './pages/PropertyDetail';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col bg-gray-50 dark:bg-navy-900 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ThemeToggle />
        <Footer />
      </div>
    </Router>
  );
}

export default App;