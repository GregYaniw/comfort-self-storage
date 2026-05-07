import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'Local Resident',
    content: 'The cleanest storage facility I have ever used. The climate control gave me peace of mind for my antique furniture. Highly recommend!',
    rating: 5
  },
  {
    name: 'Mark T.',
    role: 'Business Owner',
    content: 'We store our excess inventory here. The 24/7 access and top-notch security make it the perfect extension for our business operations.',
    rating: 5
  },
  {
    name: 'Emily Davis',
    role: 'Student',
    content: 'Moving out of my dorm was stressful, but booking a unit online with Comfort Self Storage was incredibly easy. Great prices too!',
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
