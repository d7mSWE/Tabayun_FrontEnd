import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const CountrySelect = () => {
  const navigate = useNavigate();
  
  const countries = [
    { name: 'ألمانيا', flag: '🇩🇪' },
    { name: 'أمريكا', flag: '🇺🇸' },
    { name: 'بريطانيا', flag: '🇬🇧' },
    { name: 'إندونيسيا', flag: '🇮🇩' },
    { name: 'الصين', flag: '🇨🇳' },
    { name: 'الهند', flag: '🇮🇳' },
    { name: 'إيطاليا', flag: '🇮🇹' },
    { name: 'إسبانيا', flag: '🇪🇸' },
  ];

  return (
    <div className="container" style={{ paddingTop: '60px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '48px' }}>أختر الدولة التي تود مقارنة قوانينها بالسعودية</h1>
      
      <div className="grid-8">
        {countries.map((country, index) => (
          <Card 
            key={index} 
            className="flex-center" 
            style={{ flexDirection: 'column', cursor: 'pointer', padding: '40px 20px' }}
            onClick={() => navigate('/home')}
          >
            <span style={{ fontSize: '64px', marginBottom: '16px' }}>{country.flag}</span>
            <h3 style={{ fontSize: '24px' }}>{country.name}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CountrySelect;
