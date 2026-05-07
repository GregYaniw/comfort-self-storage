import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';
import logoUrl from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col brand-col">
            <div className="logo-container footer-logo">
              <img src={logoUrl} alt="Comfort Self Storage" className="logo-img" />
            </div>
            <p className="footer-desc">
              Store Your Possessions With Comfort. Premium, secure, and climate-controlled self-storage solutions.
            </p>
            <div className="social-links">
              <a href="sms:+17057907010" className="social-icon"><MessageCircle size={20} /></a>
              <a href="https://www.instagram.com/comfortselfstorage/" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Sizes & Pricing</a></li>
              <li><a href="#testimonials">Reviews</a></li>
            </ul>
          </div>

          <div className="footer-col">
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

          <div className="footer-col">
            <h4 className="footer-heading">Office Hours</h4>
            <ul className="office-hours">
              <li><span>Mon - Sun:</span> 7:30 AM - 8:00 PM</li>
              <li className="access-hours">Gate Access: 24/7</li>
            </ul>
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
