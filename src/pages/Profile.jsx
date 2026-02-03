import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { validateEmail, validatePassword, validateName } from '../utils/validation';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const nameErr = validateName(formData.username);
    const emailErr = validateEmail(formData.email);

    if (nameErr || emailErr) {
      setErrors({ username: nameErr, email: emailErr });
      return;
    }

    updateUser({ username: formData.username, email: formData.email });
    setSuccess('تم تحديث البيانات بنجاح');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const passErr = validatePassword(formData.newPassword);
    if (!formData.currentPassword) {
      setErrors(prev => ({ ...prev, currentPassword: 'كلمة المرور الحالية مطلوبة' }));
      return;
    }
    if (passErr) {
      setErrors(prev => ({ ...prev, newPassword: passErr }));
      return;
    }

    // هنا يتم الاتصال بـ API في العادة
    setSuccess('تم تغيير كلمة المرور بنجاح');
    setFormData(prev => ({ ...prev, currentPassword: '', newPassword: '' }));
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <div className="profile-page container">
      <h1 className="page-title">الملف الشخصي</h1>
      
      {success && <div className="alert-success">{success}</div>}

      <div className="profile-grid">
        <Card className="profile-card">
          <h3>تحديث البيانات الأساسية</h3>
          <form onSubmit={handleUpdateInfo}>
            <Input 
              label="الاسم" 
              name="username"
              value={formData.username} 
              onChange={handleChange}
              error={errors.username}
            />
            <Input 
              label="البريد الإلكتروني" 
              name="email"
              value={formData.email} 
              onChange={handleChange}
              error={errors.email}
            />
            <Button type="submit" className="mt-20">حفظ التغييرات</Button>
          </form>
        </Card>

        <Card className="profile-card">
          <h3>تغيير كلمة المرور</h3>
          <form onSubmit={handleChangePassword}>
            <Input 
              label="كلمة المرور الحالية" 
              name="currentPassword"
              type="password"
              value={formData.currentPassword} 
              onChange={handleChange}
              error={errors.currentPassword}
            />
            <Input 
              label="كلمة المرور الجديدة" 
              name="newPassword"
              type="password"
              value={formData.newPassword} 
              onChange={handleChange}
              error={errors.newPassword}
            />
            <Button type="submit" variant="secondary" className="mt-20">تحديث كلمة المرور</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
