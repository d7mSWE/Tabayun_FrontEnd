import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Step1_Email from './pages/Register/Step1_Email';
import Step2_Name from './pages/Register/Step2_Name';
import Step3_Password from './pages/Register/Step3_Password';
import Step4_Confirm from './pages/Register/Step4_Confirm';
import CountrySelect from './pages/CountrySelect';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Comparison from './pages/Comparison';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import './styles/global.css';

// مكون للتحكم في ظهور الهيدر
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderPaths = ['/', '/login', '/register', '/landing'];
  const shouldHideHeader = hideHeaderPaths.some(path => location.pathname.startsWith(path)) || location.pathname === '/';

  return (
    <>
      {!shouldHideHeader && <Header />}
      {children}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            
            {/* Register Flow */}
            <Route path="/register" element={<Navigate to="/register/step1" />} />
            <Route path="/register/step1" element={<Step1_Email />} />
            <Route path="/register/step2" element={<Step2_Name />} />
            <Route path="/register/step3" element={<Step3_Password />} />
            <Route path="/register/step4" element={<Step4_Confirm />} />
            
            <Route path="/country-select" element={<CountrySelect />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
