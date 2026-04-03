import React from 'react';
import { ArrowRight } from 'lucide-react';
import CategoryCard from '../../ui/CategoryCard/CategoryCard';
import './ShopByCategory.css';

const categories = [
  { title: 'Home', icon: 'Home' },
  { title: 'Beauty', icon: 'Beauty' },
  { title: 'Kitchen', icon: 'Kitchen' },
  { title: 'Lifestyle', icon: 'Lifestyle' }
];

const ShopByCategory = () => {
  return (
    <section id="shop" className="shop-by-category">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Shop by Category</h2>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard 
              key={category.title} 
              title={category.title} 
              iconName={category.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
