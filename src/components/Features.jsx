import React from 'react';
import { Thermometer, ShieldAlert, Key, Laptop } from 'lucide-react';
import './Features.css';

const featureList = [
  {
    icon: <Thermometer size={32} />,
    title: 'Climate Controlled',
    description: 'Keep your sensitive items safe from extreme temperatures and humidity year-round.'
  },
  {
    icon: <ShieldAlert size={32} />,
    title: 'Top-Tier Security',
    description: '24/7 video surveillance, bright lighting, and individually alarmed units.'
  },
  {
    icon: <Key size={32} />,
    title: '24/7 Access',
    description: 'Access your belongings whenever you need them with our secure gate code system.'
  },
  {
    icon: <Laptop size={32} />,
    title: 'Easy Online Booking',
    description: 'Rent a unit, manage your account, and pay bills entirely online in minutes.'
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
