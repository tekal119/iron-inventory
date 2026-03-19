import React, { useState } from 'react';

const categories = [
  'Supplements',
  'Proteins',
  'Creatine',
  'Equipment',
  'Accessories',
];

const CategoryFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div>
      <h3>Filter by Category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleCategoryChange(category)}
              style={{ fontWeight: selectedCategory === category ? 'bold' : 'normal' }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;