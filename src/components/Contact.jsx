import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header text-center animate-fade-in">
          <span className="subtitle">Get In Touch</span>
          <h2>Contact Us</h2>
          <p className="section-desc">Have questions about our units or availability? Reach out to us today!</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info animate-fade-in delay-100">
            <h3>We're Here to Help</h3>
            <p>Our friendly team is always ready to assist you with your storage needs. Whether you need a unit size recommendation or have questions about our policies, we've got you covered.</p>
            
            <ul className="contact-details">
              <li>
                <div className="contact-icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>203 Industrial Road,<br/>Stayner, Ontario</p>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <Phone size={24} />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p><a href="tel:705-790-7010">(705) 790-7010</a></p>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <Mail size={24} />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p><a href="mailto:info@comfortselfstorage.ca">info@comfortselfstorage.ca</a></p>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-form-container animate-fade-in delay-200">
            <form 
              action="https://formsubmit.co/info@comfortselfstorage.ca" 
              method="POST" 
              className="contact-form glass"
            >
              {/* Optional FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - Comfort Self Storage!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="(555) 555-5555" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
