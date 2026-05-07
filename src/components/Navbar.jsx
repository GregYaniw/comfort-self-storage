import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoUrl from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container navbar-container">
        <div className="logo-container">
          <img src={logoUrl} alt="Comfort Self Storage" className="logo-img" />
        </div>
        
        <div className="nav-links desktop-only">
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Sizes & Pricing</a>
          <a href="#testimonials" className="nav-link">Reviews</a>
          <button className="btn btn-primary">Book Now</button>
        </div>

        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          <a href="#features" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#pricing" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Sizes & Pricing</a>
          <a href="#testimonials" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
          <button className="btn btn-primary">Book Now</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
