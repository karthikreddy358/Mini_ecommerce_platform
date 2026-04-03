import React from 'react';
import { CheckCircle2, Truck, ThumbsUp } from 'lucide-react';
import FeatureCard from '../../ui/FeatureCard/FeatureCard';
import './FeaturesSection.css';

const features = [
  {
    icon: CheckCircle2,
    title: 'Sustainable Sourcing',
    description: 'Every product in our store is carefully vetted to meet the highest environmental and ethical standards.'
  },
  {
    icon: Truck,
    title: 'Fast & Eco Delivery',
    description: 'Carbon-neutral shipping options using 100% recyclable and plastic-free packaging materials.'
  },
  {
    icon: ThumbsUp,
    title: 'Trusted Products',
    description: 'Loved by over 50k+ customers who have made the switch to a greener, cleaner lifestyle.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="tips" className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Why Choose EcoShop?</h2>
          <p className="section-description">
            We are committed to making sustainable living accessible and stylish for everyone.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
