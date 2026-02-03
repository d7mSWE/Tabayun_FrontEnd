import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import ChatBot from '../components/ChatBot';

const Home = () => {
  const navigate = useNavigate();

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

      <main className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '40px' }}>أي قانون حاب تقارنه؟</h1>
        
        <div className="flex-center" style={{ marginBottom: '60px' }}>
          <SearchBar placeholder="ابحث عن قانون، مخالفة، أو إجراء..." />
        </div>

        <h3 style={{ color: 'var(--color-text-light)', marginBottom: '24px' }}>الأكثر بحثاً</h3>
        
        <div className="flex-center" style={{ gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="outline" onClick={() => navigate('/comparison')}>مخالفة السرعة</Button>
          <Button variant="outline">قطع إشارة</Button>
          <Button variant="outline">شروط فتح السجل</Button>
          <Button variant="outline">إلقاء النفايات</Button>
        </div>
      </main>

      <ChatBot />
    </div>
  );
};

export default Home;
