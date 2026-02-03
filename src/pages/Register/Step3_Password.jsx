import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';

const Step3_Password = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '500px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>يا هلا والله!</h2>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '32px' }}>نحتاج بعض المعلومات</p>
        
        <ProgressBar currentStep={3} />
        
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Input type="password" placeholder="كلمة المرور" style={{ fontSize: '20px', padding: '16px' }} />
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button style={{ flex: 1 }} onClick={() => navigate('/register/step4')}>التالي</Button>
            <Button variant="outline" style={{ flex: 1 }} onClick={() => navigate('/register/step2')}>السابق</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Step3_Password;
