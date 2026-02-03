import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import ComparisonCard from '../components/ComparisonCard';
import ChatBot from '../components/ChatBot';

const Comparison = () => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [message, setMessage] = useState('');

  const comparisonData = {
    id: 'speed-limit-sa-de',
    type: 'speed-limit',
    title: 'مخالفة السرعة',
    country1: 'السعودية',
    country2: 'ألمانيا',
    countryA: { name: 'السعودية', flag: 'https://flagcdn.com/w80/sa.png' },
    countryB: { name: 'ألمانيا', flag: 'https://flagcdn.com/w80/de.png' },
    contentA: 'تتراوح غرامة تجاوز السرعة في المملكة العربية السعودية بين 150 ريال وتصل إلى 2000 ريال حسب مقدار التجاوز ونوع الطريق.',
    contentB: 'في ألمانيا، تبدأ غرامات السرعة من 20 يورو وتصل إلى 800 يورو، وقد تشمل سحب الرخصة لفترة معينة في حال التجاوز الكبير.',
  };

  useEffect(() => {
    const saved = localStorage.getItem('tabayun_favorites');
    if (saved) {
      const favorites = JSON.parse(saved);
      setIsFavorite(favorites.some(fav => fav.id === comparisonData.id));
    }
  }, []);

  const toggleFavorite = () => {
    const saved = localStorage.getItem('tabayun_favorites');
    let favorites = saved ? JSON.parse(saved) : [];
    
    if (isFavorite) {
      favorites = favorites.filter(fav => fav.id !== comparisonData.id);
      setMessage('تم الحذف من المفضلة');
    } else {
      favorites.push(comparisonData);
      setMessage('تم الحفظ في المفضلة');
    }
    
    localStorage.setItem('tabayun_favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="page-wrapper">
      <main className="container" style={{ paddingTop: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h1>المرور - {comparisonData.title}</h1>
          <button 
            onClick={toggleFavorite} 
            className={`favorite-toggle ${isFavorite ? 'active' : ''}`}
            title={isFavorite ? 'حذف من المفضلة' : 'إضافة للمفضلة'}
          >
            <Heart size={28} fill={isFavorite ? 'var(--color-secondary)' : 'none'} />
          </button>
        </div>
        
        {message && <div className="alert-toast">{message}</div>}
        
        <ComparisonCard {...comparisonData} />

        <Card className="summary-card">
          <h3 style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>الخلاصة</h3>
          <p>بشكل عام، القوانين في السعودية تركز على الغرامات المالية التصاعدية، بينما في ألمانيا يتم التركيز بشكل أكبر على النقاط المرورية واحتمالية سحب الرخصة لفترات طويلة.</p>
        </Card>

        <div style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
          <Button style={{ flex: 1 }} onClick={() => navigate('/home')}>التالي</Button>
          <Button variant="outline" style={{ flex: 1 }} onClick={() => navigate('/home')}>السابق</Button>
        </div>
      </main>

      <ChatBot />
    </div>
  );
};

export default Comparison;
