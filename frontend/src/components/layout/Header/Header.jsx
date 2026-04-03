import React from 'react';
import { Leaf, Search } from 'lucide-react';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container header-container">
        
        {/* Logo */}
        <a href="/" className="logo-link">
          <Leaf className="logo-icon" fill="currentColor" strokeWidth={0} />
          <span className="logo-text">EcoShop</span>
        </a>

        {/* Navigation */}
        <nav className="main-nav">
          <ul className="nav-list">
            <li><a href="#shop" className="nav-link active" onClick={e => { e.preventDefault(); navigate('/'); }}>Shop</a></li>
            <li><a href="#tips" className="nav-link"onClick={e => { e.preventDefault(); navigate('/'); }}>Sustainable Tips</a></li>
            <li><a href="#about" className="nav-link" onClick={e => { e.preventDefault(); navigate('/'); }}>About Us</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <div className="search-container">
            <Input 
              icon={Search} 
              placeholder="Search eco-products..." 
              className="header-search"
            />
          </div>
          <div className="auth-buttons">
            <Button variant="primary" onClick={() => navigate('/signup')}>Sign Up</Button>
            <Button variant="secondary" onClick={() => navigate('/login')}>Login</Button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
