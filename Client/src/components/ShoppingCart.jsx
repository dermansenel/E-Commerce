import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import './ShoppingCart.css';

function ShoppingCart({ isOpen, onClose }) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      const items = JSON.parse(savedCart);
      setCartItems(items);
      calculateTotal(items);
    }

    // Listen for cart updates
    const handleCartUpdate = () => {
      const savedCart = localStorage.getItem('cartItems');
      if (savedCart) {
        const items = JSON.parse(savedCart);
        setCartItems(items);
        calculateTotal(items);
      } else {
        setCartItems([]);
        setTotal(0);
      }
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(sum);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(itemId);
      return;
    }

    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
    localStorage.removeItem('cartItems');
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Shopping Cart ({cartItems.length})</h2>
          <button className="cart-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
              <button className="btn-continue-shopping" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">${item.price}</p>
                      <div className="cart-item-quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button 
                      className="cart-item-remove"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <h3>Total: ${total.toFixed(2)}</h3>
                </div>
                <div className="cart-actions">
                  <button className="btn-clear-cart" onClick={clearCart}>
                    Clear Cart
                  </button>
                  <button className="btn-checkout">
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
