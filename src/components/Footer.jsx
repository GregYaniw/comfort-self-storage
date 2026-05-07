import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Camera, Share2 } from 'lucide-react';
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
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Camera size={20} /></a>
              <a href="#" className="social-icon"><Share2 size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Sizes & Pricing</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">FAQ</a></li>
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
              <li><span>Mon - Fri:</span> 9:00 AM - 6:00 PM</li>
              <li><span>Saturday:</span> 9:00 AM - 4:00 PM</li>
              <li><span>Sunday:</span> Closed</li>
              <li className="access-hours">Gate Access: 24/7</li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Comfort Self Storage. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
