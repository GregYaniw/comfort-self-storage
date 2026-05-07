import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    name: 'Shyanne Woodcock',
    role: 'Local Customer',
    content: 'Josh was kind and helpful and made it comfortable to choose this storage company for all my needs. The units are bigger than competitors for less of a price. Thanks for your help Josh!',
    rating: 5
  },
  {
    name: 'Ashley Plewes',
    role: 'Local Customer',
    content: 'Comfort Self Storage saved me! The facility and units were very clean and spacious. I liked how the grounds were locked at night and the extra security cameras gave me a piece of mind.',
    rating: 5
  },
  {
    name: 'Sabine Abt',
    role: 'Local Customer',
    content: 'Outstanding customer service from my first email enquiry. The facility is very safe and secure. The individual units are clean and in great shape. I am so pleased to have found Comfort Self Storage!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header text-center animate-fade-in">
          <span className="subtitle">Reviews</span>
          <h2>What Our Customers Say</h2>
          <p className="section-desc">Don't just take our word for it. Read why thousands trust us with their belongings.</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className={`testimonial-card animate-fade-in delay-${(index + 1) * 100}`}>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="star-icon fill-current" />
                ))}
              </div>
              <p className="review-content">"{review.content}"</p>
              <div className="review-author">
                <div className="author-avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="author-name">{review.name}</h4>
                  <p className="author-role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
