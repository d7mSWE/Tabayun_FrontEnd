import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: '64px', marginBottom: '24px' }}>استكشف قوانين المملكة</h1>
          <Button 
            variant="secondary" 
            style={{ fontSize: '24px', padding: '16px 48px' }}
            onClick={() => navigate('/register')}
          >
            سجل واكتشف الآن
          </Button>
        </div>
      </section>
      
      <footer>
        <div className="container">
          <p>جميع الحقوق محفوظة لتباين © 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
