import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, ExternalLink, HeartOff } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('tabayun_favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter(fav => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem('tabayun_favorites', JSON.stringify(updated));
  };

  if (favorites.length === 0) {
    return (
      <div className="favorites-page container flex-center-column">
        <HeartOff size={64} color="var(--color-secondary)" />
        <h2 className="mt-20">لا توجد مقارنات في المفضلة</h2>
        <p className="text-light">ابدأ بتصفح القوانين وإضافتها هنا</p>
        <Button onClick={() => navigate('/categories')} className="mt-32">تصفح التصنيفات</Button>
      </div>
    );
  }

  return (
    <div className="favorites-page container">
      <h1 className="page-title">المفضلة</h1>
      <div className="favorites-grid">
        {favorites.map(fav => (
          <Card key={fav.id} className="favorite-card">
            <div className="fav-content">
              <h4>{fav.title}</h4>
              <p className="fav-subtitle">{fav.country1} vs {fav.country2}</p>
            </div>
            <div className="fav-actions">
              <Button 
                variant="outline" 
                onClick={() => navigate(`/comparison?type=${fav.type}`)}
                className="btn-small"
              >
                <ExternalLink size={16} />
                عرض
              </Button>
              <button 
                className="delete-btn" 
                onClick={() => removeFavorite(fav.id)}
                title="حذف من المفضلة"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
