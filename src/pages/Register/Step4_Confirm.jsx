import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';

const Step4_Confirm = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '500px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>يا هلا والله!</h2>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '32px' }}>نحتاج بعض المعلومات</p>
        
        <ProgressBar currentStep={4} />
        
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '12px', textAlign: 'right' }}>
            <p>بضغطك على "أهلاً بك"، فإنك توافق على شروط الخدمة وسياسة الخصوصية.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button style={{ flex: 1 }} onClick={() => navigate('/country-select')}>أهلاً بك</Button>
            <Button variant="outline" style={{ flex: 1 }} onClick={() => navigate('/register/step3')}>السابق</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Step4_Confirm;
