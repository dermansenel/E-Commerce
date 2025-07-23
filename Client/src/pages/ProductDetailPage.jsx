import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";
import './ProductDetailPage.css';

// Sayfa değişiminde otomatik en üste scroll
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5298/api/product/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);

        // Check if in wishlist
        const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems') || '[]');
        setIsInWishlist(wishlistItems.some(item => item.id === data.id));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({ ...product, quantity });
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.dispatchEvent(new Event('cartUpdated'));
    alert(`${quantity} item(s) added to cart!`);
  };

  const handleToggleWishlist = () => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems') || '[]');
    
    if (isInWishlist) {
      const updatedItems = wishlistItems.filter(item => item.id !== product.id);
      localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
      setIsInWishlist(false);
    } else {
      const updatedItems = [...wishlistItems, product];
      localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
      setIsInWishlist(true);
    }
    
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? '#fbbf24' : 'none'}
        stroke={i < rating ? '#fbbf24' : '#d1d5db'}
      />
    ));
  };

  if (loading) {
    return (
      <div className="app">
        <Header />
        <main style={{ paddingTop: "80px" }}>
          <div
            className="container"
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <p>Yükleniyor...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Header />
        <main style={{ paddingTop: "80px" }}>
          <div
            className="container"
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <h1>Error!</h1>
            <p>{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <div className="container" style={{ padding: "2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            {/* Ürün Resmi */}
            <div>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                }}
              />
            </div>

            {/* Ürün Bilgileri */}
            <div>
              <h1 style={{ marginBottom: "1rem", color: "#111827" }}>
                {product.name}
              </h1>

              <div style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    color: product.stock > 0 ? "#059669" : "#dc2626",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor:
                        product.stock > 0 ? "#059669" : "#dc2626",
                      borderRadius: "50%",
                    }}
                  ></span>
                  {product.stock > 0
                    ? `${product.stock} adet stokta`
                    : "Stokta yok"}
                </span>
              </div>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                  fontSize: "1rem",
                }}
              >
                {product.description || product.aciklama}
              </p>

              <div style={{ marginBottom: "2rem" }}>
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "#111827",
                  }}
                >
                  ₺{product.price.toLocaleString()}
                </span>
              </div>

              <div
                style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}
              >
                <button
                  style={{
                    flex: "1",
                    padding: "12px 24px",
                    backgroundColor: product.stock > 0 ? "#111827" : "#9ca3af",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    cursor: product.stock > 0 ? "pointer" : "not-allowed",
                    transition: "all 0.2s ease",
                  }}
                  disabled={product.stock === 0}
                  onMouseOver={(e) => {
                    if (product.stock > 0) {
                      e.target.style.backgroundColor = "#1f2937";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (product.stock > 0) {
                      e.target.style.backgroundColor = "#111827";
                    }
                  }}
                >
                  {product.stock > 0 ? "Sepete Ekle" : "Stokta Yok"}
                </button>

                <button
                  style={{
                    padding: "12px",
                    backgroundColor: "#f9fafb",
                    color: "#374151",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#f3f4f6";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#f9fafb";
                  }}
                >
                  ♡
                </button>
              </div>

              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#f9fafb",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 0.5rem 0",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Ürün Özellikleri
                </h3>
                <ul
                  style={{
                    margin: "0",
                    paddingLeft: "1.5rem",
                    color: "#6b7280",
                  }}
                >
                  <li>Ürün ID: {product.id}</li>
                  <li>Durum: {product.isActive ? "Aktif" : "Pasif"}</li>
                  <li>Stok Durumu: {product.stock} adet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
