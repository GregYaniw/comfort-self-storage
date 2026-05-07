import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import bgImage from '../assets/IMG_2849-min-scaled.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="hero-badge delay-100">
            <MapPin size={18} className="badge-icon" />
            <span>203 Industrial Road, Stayner, Ontario</span>
          </div>
          
          <h1 className="hero-title delay-200">
            Store Your Possessions <br/>
            <span className="text-highlight">With Comfort.</span>
          </h1>
          
          <p className="hero-description delay-300">
            Premium self-storage solutions designed for your peace of mind. 
            Enjoy 24/7 access, state-of-the-art security, and easy online booking.
          </p>
          
          <div className="hero-actions delay-300">
            <a href="tel:705-790-7010" className="btn btn-primary btn-large">
              <Phone size={20} style={{ marginRight: '8px' }} />
              (705) 790-7010
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Comfort+Self+Storage+203+Industrial+Road,+Stayner,+Ontario" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline btn-large glass-btn"
            >
              <MapPin size={20} style={{ marginRight: '8px' }} />
              Find Our Location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
