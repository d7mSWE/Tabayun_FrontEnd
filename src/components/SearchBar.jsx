import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ placeholder = "ابحث هنا...", className = '' }) => {
  return (
    <div className={`search-bar ${className}`}>
      <Search size={20} color="#6B5B4F" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
