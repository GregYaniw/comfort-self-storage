import React from 'react';
import { MapPin, ShieldAlert, Key, HeartHandshake } from 'lucide-react';
import './Features.css';

const featureList = [
  {
    icon: <MapPin size={32} />,
    title: 'Clean & Convenient',
    description: 'A fully paved facility featuring spotless units and a convenient location to make your move easy.'
  },
  {
    icon: <ShieldAlert size={32} />,
    title: 'Top-Tier Security',
    description: '24/7 video surveillance, gate access control, and bright lighting.'
  },

  {
    icon: <HeartHandshake size={32} />,
    title: 'Friendly Support',
    description: 'Our team is here to answer your questions and ensure a stress-free storage experience.'
  }
];

const Features = () => {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-header text-center animate-fade-in">
          <span className="subtitle">Why Choose Us</span>
          <h2>The Comfort Difference</h2>
          <p className="section-desc">Experience self-storage that prioritizes your convenience and security.</p>
        </div>

        <div className="features-grid">
          {featureList.map((feature, index) => (
            <div key={index} className={`feature-card animate-fade-in delay-${(index + 1) * 100}`}>
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
