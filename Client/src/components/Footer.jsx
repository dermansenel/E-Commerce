import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Main Footer Content */}
        <div className="footer__content">
          
          {/* Company Info */}
          <div className="footer__section">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <ShoppingBag size={32} />
              </div>
              <div className="footer__logo-text">
                <h3>ShopLux</h3>
                <span>Premium Store</span>
              </div>
            </div>
            <p className="footer__description">
              Leading e-commerce platform offering premium quality products and exceptional customer experience. 
              Secure shopping and fast delivery guarantee.
            </p>
            <div className="footer__social">
              <a href="#" className="social__link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social__link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social__link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social__link">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#deals">Deals</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer__section">
            <h4 className="footer__title">Customer Service</h4>
            <ul className="footer__links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#shipping">Shipping & Delivery</a></li>
              <li><a href="#returns">Returns & Exchange</a></li>
              <li><a href="#warranty">Warranty Terms</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#support">Live Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h4 className="footer__title">Contact Information</h4>
            <div className="footer__contact">
              <div className="contact__item">
                <MapPin size={18} />
                <span>Maslak District, Büyükdere Ave. No:255, 34398 Şişli/Istanbul</span>
              </div>
              <div className="contact__item">
                <Phone size={18} />
                <span>+90 (212) 123 45 67</span>
              </div>
              <div className="contact__item">
                <Mail size={18} />
                <span>info@shoplux.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="footer__newsletter">
              <h5>Newsletter Subscription</h5>
              <div className="newsletter__form">
                <input 
                  type="email" 
                  placeholder="Your email address..."
                  className="newsletter__input"
                />
                <button className="newsletter__button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>&copy; 2025 ShopLux. All rights reserved.</p>
          </div>
          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
