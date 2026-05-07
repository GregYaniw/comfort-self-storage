import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Camera } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col brand-col">
            <div className="logo-container footer-logo">
              <a href="#" style={{ display: 'block', height: '40px' }}>
                <Logo color="#ffffff" className="logo-img" />
              </a>
            </div>
            <p className="footer-desc">
              Store Your Possessions With Comfort. Premium, secure self-storage solutions.
            </p>
            <div className="social-links">
              <a href="sms:+17057907010" className="social-icon"><MessageCircle size={20} /></a>
              <a href="https://www.instagram.com/comfortselfstorage/" target="_blank" rel="noopener noreferrer" className="social-icon"><Camera size={20} /></a>
            </div>

            <div style={{ marginTop: '4rem' }}>
              <h4 className="footer-heading">Office Hours</h4>
              <ul className="office-hours">
                <li style={{ display: 'flex', gap: '2rem' }}><span>Mon - Sun:</span> <span>7:30 AM - 8:00 PM</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-col right-col">
            <div className="links-contact-row">
              <div className="links-col">
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links">
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Sizes & Pricing</a></li>
                  <li><a href="#testimonials">Reviews</a></li>
                </ul>
              </div>
              <div className="contact-col">
                <h4 className="footer-heading">Contact Us</h4>
                <ul className="footer-contact">
                  <li>
                    <MapPin size={18} className="contact-icon" />
                    <span>203 Industrial Road, <br/> Stayner, Ontario</span>
                  </li>
                  <li>
                    <Phone size={18} className="contact-icon" />
                    <a href="tel:705-790-7010">(705) 790-7010</a>
                  </li>
                  <li>
                    <Mail size={18} className="contact-icon" />
                    <a href="mailto:info@comfortselfstorage.ca">info@comfortselfstorage.ca</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div style={{ marginTop: '2rem', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <iframe
                title="Comfort Self Storage Location"
                src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=203%20Industrial%20Road,%20Stayner,%20Ontario+(Comfort%20Self%20Storage)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="250"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Comfort Self Storage. All rights reserved.</p>
          <p className="footer-verse">“Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.” Acts 16:31</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
