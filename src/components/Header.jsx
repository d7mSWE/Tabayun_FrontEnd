import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, User, Heart, Home, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from './Button';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/landing');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-right">
          <Link to="/home" className="header-logo">تباين</Link>
          <nav className="header-nav">
            <Link to="/home" className={`nav-link ${isActive('/home') ? 'active' : ''}`}>
              <Home size={18} />
              الرئيسية
            </Link>
            <Link to="/categories" className={`nav-link ${isActive('/categories') ? 'active' : ''}`}>
              <Search size={18} />
              تصفح
            </Link>
            <Link to="/favorites" className={`nav-link ${isActive('/favorites') ? 'active' : ''}`}>
              <Heart size={18} />
              المفضلة
            </Link>
          </nav>
        </div>

        <div className="header-left">
          {user ? (
            <div className="user-menu">
              <Link to="/profile" className="user-profile-link">
                <User size={20} />
                <span>{user.username || user.email}</span>
              </Link>
              <button onClick={handleLogout} className="logout-btn" title="تسجيل خروج">
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Button onClick={() => navigate('/login')} variant="primary">دخول</Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
