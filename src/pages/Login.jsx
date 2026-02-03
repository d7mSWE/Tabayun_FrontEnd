import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chrome } from 'lucide-react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { validateEmail, validatePassword } from '../utils/validation';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // مسح الخطأ عند الكتابة
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailErr = validateEmail(formData.email);
    const passErr = validatePassword(formData.password);

    if (emailErr || passErr) {
      setErrors({ email: emailErr, password: passErr });
      return;
    }

    // محاكاة تسجيل الدخول
    login({ email: formData.email, username: formData.email.split('@')[0] });
    navigate('/home');
  };

  return (
    <div className="flex-center"> 
      <Card className="card-login"> 
        <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>تسجيل الدخول</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Input 
            label="البريد الإلكتروني" 
            name="email"
            placeholder="example@mail.com" 
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input 
            label="كلمة المرور" 
            name="password"
            type="password" 
            placeholder="أدخل كلمة المرور" 
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          
          <a href="#" style={{ color: 'var(--color-primary)', fontSize: '14px', textAlign: 'left' }}>
            هل نسيت كلمة المرور؟
          </a>
          
          <Button type="submit">دخول</Button>
          <Button type="button" variant="secondary" onClick={() => navigate('/register/step1')}>إنشاء حساب</Button>
          
          <div style={{ textAlign: 'center', color: '#888', margin: '10px 0' }}>أو</div>
          
          <Button type="button" variant="outline">
            <Chrome size={20} />
            الدخول بواسطة Google
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
