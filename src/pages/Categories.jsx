import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import ChatBot from '../components/ChatBot';

const Categories = () => {
  const categories = [
    { title: 'المرور', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop' },
    { title: 'المأكولات', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' },
    { title: 'التجارة', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop' },
    { title: 'الصحة', image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?w=400&h=300&fit=crop' },
    { title: 'الذوق العام', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop' },
    { title: 'البيئة', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop' },
  ];

  return (
    <div>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold' }}>تبايـــن</div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/home">الرئيسية</Link></li>
              <li><Link to="/categories">تصفح</Link></li>
              <li><Link to="#">تواصل</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container" style={{ paddingTop: '60px' }}>
        <h1 style={{ marginBottom: '40px' }}>الأقسام</h1>
        
        <div className="grid-6">
          {categories.map((cat, index) => (
            <CategoryCard key={index} title={cat.title} image={cat.image} />
          ))}
        </div>
      </main>

      <ChatBot />
    </div>
  );
};

export default Categories;
