import React, { useState, useEffect } from 'react';
import { Bell, X, Check, Info, AlertTriangle, AlertCircle } from 'lucide-react';
import './NotificationDrawer.css';

function NotificationDrawer({ isOpen, onClose }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Load notifications from localStorage
    const savedNotifications = localStorage.getItem('notifications');
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications));
    } else {
      // Add some sample notifications
      const sampleNotifications = [
        {
          id: 1,
          type: 'success',
          title: 'Order Confirmed',
          message: 'Your order #12345 has been confirmed and is being processed.',
          time: '2 minutes ago',
          read: false
        },
        {
          id: 2,
          type: 'info',
          title: 'New Discount Available',
          message: '25% off on all electronics! Limited time offer.',
          time: '1 hour ago',
          read: false
        },
        {
          id: 3,
          type: 'warning',
          title: 'Low Stock Alert',
          message: 'Only 2 items left in your wishlist product "Wireless Headphones".',
          time: '3 hours ago',
          read: true
        },
        {
          id: 4,
          type: 'success',
          title: 'Payment Received',
          message: 'Your payment for order #12344 has been successfully processed.',
          time: '1 day ago',
          read: true
        }
      ];
      setNotifications(sampleNotifications);
      localStorage.setItem('notifications', JSON.stringify(sampleNotifications));
    }
  }, []);

  const markAsRead = (notificationId) => {
    const updatedNotifications = notifications.map(notification =>
      notification.id === notificationId 
        ? { ...notification, read: true }
        : notification
    );
    setNotifications(updatedNotifications);
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => 
      ({ ...notification, read: true })
    );
    setNotifications(updatedNotifications);
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  };

  const removeNotification = (notificationId) => {
    const updatedNotifications = notifications.filter(notification => 
      notification.id !== notificationId
    );
    setNotifications(updatedNotifications);
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    localStorage.removeItem('notifications');
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <Check size={20} className="notification-icon success" />;
      case 'warning':
        return <AlertTriangle size={20} className="notification-icon warning" />;
      case 'error':
        return <AlertCircle size={20} className="notification-icon error" />;
      default:
        return <Info size={20} className="notification-icon info" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  if (!isOpen) return null;

  return (
    <div className="notification-overlay">
      <div className="notification-drawer">
        <div className="notification-header">
          <div className="notification-title">
            <Bell size={20} />
            <h2>Notifications</h2>
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </div>
          <button className="notification-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="notification-actions">
          {unreadCount > 0 && (
            <button className="btn-mark-all-read" onClick={markAllAsRead}>
              Mark all as read
            </button>
          )}
          {notifications.length > 0 && (
            <button className="btn-clear-all" onClick={clearAllNotifications}>
              Clear all
            </button>
          )}
        </div>

        <div className="notification-content">
          {notifications.length === 0 ? (
            <div className="notification-empty">
              <Bell size={48} color="#d1d5db" />
              <p>No notifications</p>
              <span>You're all caught up!</span>
            </div>
          ) : (
            <div className="notification-list">
              {notifications.map(notification => (
                <div 
                  key={notification.id} 
                  className={`notification-item ${!notification.read ? 'unread' : ''}`}
                  onClick={() => !notification.read && markAsRead(notification.id)}
                >
                  <div className="notification-icon-wrapper">
                    {getIcon(notification.type)}
                  </div>
                  <div className="notification-details">
                    <div className="notification-header-text">
                      <h4>{notification.title}</h4>
                      <span className="notification-time">{notification.time}</span>
                    </div>
                    <p>{notification.message}</p>
                    {!notification.read && (
                      <div className="notification-unread-indicator"></div>
                    )}
                  </div>
                  <button 
                    className="notification-remove"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeNotification(notification.id);
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NotificationDrawer;
