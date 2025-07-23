import React, { useState, useEffect } from 'react';
import { Heart, X } from 'lucide-react';
import './Wishlist.css';

function Wishlist({ isOpen, onClose }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Load wishlist items from localStorage
    const savedWishlist = localStorage.getItem('wishlistItems');
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }

    // Listen for wishlist updates
    const handleWishlistUpdate = () => {
      const savedWishlist = localStorage.getItem('wishlistItems');
      if (savedWishlist) {
        setWishlistItems(JSON.parse(savedWishlist));
      } else {
        setWishlistItems([]);
      }
    };

    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    
    return () => {
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
    };
  }, []);

  const removeFromWishlist = (itemId) => {
    const updatedItems = wishlistItems.filter(item => item.id !== itemId);
    setWishlistItems(updatedItems);
    localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
  };

  const addToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...item, quantity: 1 });
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    removeFromWishlist(item.id);
    
    // Show success message
    alert('Product added to cart!');
  };

  if (!isOpen) return null;

  return (
    <div className="wishlist-overlay">
      <div className="wishlist-sidebar">
        <div className="wishlist-header">
          <h2>My Wishlist ({wishlistItems.length})</h2>
          <button className="wishlist-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="wishlist-content">
          {wishlistItems.length === 0 ? (
            <div className="wishlist-empty">
              <Heart size={48} color="#d1d5db" />
              <p>Your wishlist is empty</p>
              <button className="btn-continue-shopping" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="wishlist-items">
              {wishlistItems.map(item => (
                <div key={item.id} className="wishlist-item">
                  <img src={item.imageUrl} alt={item.name} className="wishlist-item-image" />
                  <div className="wishlist-item-details">
                    <h4>{item.name}</h4>
                    <p className="wishlist-item-price">${item.price}</p>
                    <div className="wishlist-item-actions">
                      <button 
                        className="btn-add-to-cart"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                      <button 
                        className="btn-remove-wishlist"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
