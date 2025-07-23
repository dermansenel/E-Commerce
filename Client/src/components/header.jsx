import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Menu, X, Search, Heart, Bell } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCart from './ShoppingCart.jsx';
import Wishlist from './Wishlist.jsx';
import NotificationDrawer from './NotificationDrawer.jsx';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Update counts from localStorage
    const updateCounts = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems') || '[]');
      const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
      
      setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
      setWishlistCount(wishlistItems.length);
      setNotificationCount(notifications.filter(n => !n.read).length);
    };

    updateCounts();

    // Listen for storage changes
    window.addEventListener('storage', updateCounts);
    
    // Custom event listeners for real-time updates
    window.addEventListener('cartUpdated', updateCounts);
    window.addEventListener('wishlistUpdated', updateCounts);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', updateCounts);
      window.removeEventListener('cartUpdated', updateCounts);
      window.removeEventListener('wishlistUpdated', updateCounts);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        
        {/* Logo Section */}
        <div className="header__logo">
          <Link to="/" className="logo">
            <div className="logo__icon">
              <ShoppingBag size={28} />
              <div className="logo__glow"></div>
            </div>
            <div className="logo__text">
              <h1 className="logo__title">ShopLux</h1>
              <span className="logo__subtitle">Premium Store</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                className={({ isActive }) => "nav__link" + (isActive ? " nav__link--active" : "")}
              >
                Home
                <span className="nav__indicator"></span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/products"
                className={({ isActive }) => "nav__link" + (isActive ? " nav__link--active" : "")}
              >
                Products
                <span className="nav__indicator"></span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about"
                className={({ isActive }) => "nav__link" + (isActive ? " nav__link--active" : "")}
              >
                About
                <span className="nav__indicator"></span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact"
                className={({ isActive }) => "nav__link" + (isActive ? " nav__link--active" : "")}
              >
                Contact
                <span className="nav__indicator"></span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className={`header__search ${isSearchFocused ? 'header__search--focused' : ''}`}>
          <div className="search__wrapper">
            <Search className="search__icon" size={20} />
            <input 
              type="text" 
              placeholder="Search premium products..."
              className="search__input"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <button className="search__button">
              Search
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="header__actions">
          
          {/* Notifications */}
          <button 
            className="action__button action__button--notification"
            onClick={() => setIsNotificationOpen(true)}
          >
            <Bell size={22} />
            {notificationCount > 0 && (
              <span className="action__badge">{notificationCount}</span>
            )}
            <div className="action__tooltip">Notifications</div>
          </button>

          {/* Wishlist */}
          <button 
            className="action__button action__button--wishlist"
            onClick={() => setIsWishlistOpen(true)}
          >
            <Heart size={22} />
            {wishlistCount > 0 && (
              <span className="action__badge">{wishlistCount}</span>
            )}
            <div className="action__tooltip">Wishlist</div>
          </button>

          {/* Cart */}
          <button 
            className="action__button action__button--cart"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="action__badge action__badge--pulse">{cartCount}</span>
            )}
            <div className="action__tooltip">Shopping Cart</div>
          </button>

          {/* Profile */}
          <button className="action__button action__button--profile">
            <User size={22} />
            <div className="action__tooltip">Profile</div>
          </button>

          {/* Mobile Menu */}
          <button 
            className="action__button action__button--mobile"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
          <div className="mobile-menu__content">
            
            {/* Mobile Search */}
            <div className="mobile-search">
              <div className="mobile-search__wrapper">
                <Search size={18} />
                <input 
                  type="text" 
                  placeholder="Search products..."
                  className="mobile-search__input"
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="mobile-nav">
              <a href="#home" className="mobile-nav__link mobile-nav__link--active">
                Home
              </a>
              <a href="#products" className="mobile-nav__link">
                Products
              </a>
              <a href="#categories" className="mobile-nav__link">
                Categories
              </a>
              <a href="#deals" className="mobile-nav__link">
                Deals <span className="mobile-nav__badge">Hot</span>
              </a>
              <a href="#about" className="mobile-nav__link">
                About
              </a>
              <a href="#wishlist" className="mobile-nav__link">
                <Heart size={16} /> Wishlist
              </a>
              <a href="#profile" className="mobile-nav__link">
                <User size={16} /> Profile
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Drawer Components */}
      <ShoppingCart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
      <Wishlist 
        isOpen={isWishlistOpen} 
        onClose={() => setIsWishlistOpen(false)} 
      />
      <NotificationDrawer 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)} 
      />
    </header>
  );
}

export default Header;