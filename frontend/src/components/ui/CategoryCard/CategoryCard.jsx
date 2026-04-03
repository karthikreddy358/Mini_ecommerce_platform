import React from 'react';
import { Home, Sparkles, UtensilsCrossed, Leaf } from 'lucide-react';
import './CategoryCard.css';

const IconMap = {
  Home,
  Beauty: Sparkles,
  Kitchen: UtensilsCrossed,
  Lifestyle: Leaf
};

const CategoryCard = ({ title, iconName }) => {
  const IconComponent = IconMap[iconName] || Leaf;

  return (
    <a href={`/category/${title.toLowerCase()}`} className="category-card">
      <div className="category-icon-wrapper">
        <IconComponent className="category-icon" size={24} />
      </div>
      <span className="category-title">{title}</span>
    </a>
  );
};

export default CategoryCard;
