import React, { useState, useEffect } from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    // Check if product is in wishlist
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems') || '[]');
    setIsInWishlist(wishlistItems.some(item => item.id === product.id));
  }, [product.id]);

  const handleToggleWishlist = () => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems') || '[]');
    
    if (isInWishlist) {
      // Remove from wishlist
      const updatedItems = wishlistItems.filter(item => item.id !== product.id);
      localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
      setIsInWishlist(false);
    } else {
      // Add to wishlist
      const updatedItems = [...wishlistItems, product];
      localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
      setIsInWishlist(true);
    }
    
    // Trigger update event
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Trigger update event
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Show success message
    alert('Product added to cart!');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'star star--filled' : 'star'}
        fill={i < rating ? '#fbbf24' : 'none'}
      />
    ));
  };

  return (
    <div className="product-card">
      {/* Badge */}
      {product.isNew && <div className="product-badge product-badge--new">New</div>}
      
      {/* Image */}
      <Link to={`/products/${product.id}`} className="product-image-container">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="product-image"
          loading="lazy"
        />
      </Link>

      {/* Content */}
      <div className="product-info">
        {/* Stock Info */}
        <div className={`stock-info ${product.stock === 0 ? 'stock-out' : ''}`}>
          <span className="stock-dot"></span>
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </div>

        {/* Name */}
        <Link to={`/products/${product.id}`} className="product-name-link">
          <h3 className="product-name">{product.name}</h3>
        </Link>
        
        {/* Description */}
        <p className="product-description">{product.aciklama || product.description}</p>
        
        {/* Rating */}
        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating || 4)}
          </div>
          <span className="rating-text">({product.reviewCount || 124})</span>
        </div>
        
        {/* Price */}
        <div className="product-footer">
          <div className="price-section">
            {product.originalPrice && (
              <span className="price-original">${product.originalPrice.toLocaleString()}</span>
            )}
            <span className="price-current">${product.price.toLocaleString()}</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="product-actions">
          <button 
            className="btn btn-primary"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
          
          <button 
            className={`btn btn-secondary action-btn ${isInWishlist ? 'action-btn--active' : ''}`}
            onClick={handleToggleWishlist}
            title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <Heart size={16} fill={isInWishlist ? '#dc2626' : 'none'} />
          </button>
        </div>
        
        {/* Status */}
        {!product.isActive && (
          <div className="product-status status-inactive">
            Not Available
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
