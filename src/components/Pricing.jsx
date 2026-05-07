import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const pricingPlans = [
  {
    size: '5x10 Unit',
    price: '$119.99',
    period: '/ 4 weeks',
    idealFor: 'Sizes are approximate',
    features: ['Plus HST', 'Drive-Up Access', 'Ground Floor Access']
  },
  {
    size: '10x10 Unit',
    price: '$158.99',
    period: '/ 4 weeks',
    idealFor: 'Sizes are approximate',
    features: ['Plus HST', 'Drive-Up Access', 'Ground Floor Access', 'Most Requested'],
    popular: true
  },
  {
    size: '10x15 Unit',
    price: '$209.99',
    period: '/ 4 weeks',
    idealFor: 'Sizes are approximate',
    features: ['Plus HST', 'Drive-Up Access', 'Ground Floor Access']
  },
  {
    size: '10x20 Unit',
    price: '$264.99',
    period: '/ 4 weeks',
    idealFor: 'Sizes are approximate',
    features: ['Plus HST', 'Drive-Up Access', 'Ground Floor Access']
  },
  {
    size: '10x30 Unit',
    price: '$335.99',
    period: '/ 4 weeks',
    idealFor: 'Sizes are approximate',
    features: ['Plus HST', 'Maximum Storage', 'Drive-Up Access', 'Ground Floor Access']
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="section-header text-center animate-fade-in">
          <span className="subtitle">Sizes & Pricing</span>
          <h2>Find Your Perfect Fit</h2>
          <p className="section-desc">Transparent pricing with no hidden fees. Month-to-month leases available.</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''} animate-fade-in delay-${(index + 1) * 100}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <h3 className="plan-size">{plan.size}</h3>
                <div className="plan-price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="plan-ideal">{plan.idealFor}</p>
              </div>
              
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <Check size={20} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pricing-action">
                <a href="mailto:info@comfortselfstorage.ca" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} w-100`}>
                  Contact Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
