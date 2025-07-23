import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import '../App.css';

function HomePage() {
  return (
    <div className="app">
      <Header />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>ShopLux</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Big discounts on premium products!</p>
          <Link 
            to="/products" 
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#667eea',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}
          >
            Discover Products
          </Link>
        </section>

        {/* Discount Cards */}
        <section style={{ padding: '3rem 2rem' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>
              Special Discounts
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {/* Technology Discount */}
              <div style={{
                background: 'linear-gradient(135deg, #ff6b6b, #ee5a5a)',
                borderRadius: '16px',
                padding: '2rem',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Technology Products</h3>
                  <p style={{ marginBottom: '1rem', opacity: 0.9 }}>On laptops, phones and accessories</p>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>25% Off</div>
                  <Link 
                    to="/products" 
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    Explore
                  </Link>
                </div>
              </div>

              {/* Moda İndirimi */}
              <div style={{
                background: 'linear-gradient(135deg, #4ecdc4, #44a4a0)',
                borderRadius: '16px',
                padding: '2rem',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Fashion & Accessories</h3>
                  <p style={{ marginBottom: '1rem', opacity: 0.9 }}>Special offers on seasonal products</p>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>40% Off</div>
                  <Link 
                    to="/products" 
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    Explore
                  </Link>
                </div>
              </div>

              {/* Ev & Yaşam İndirimi */}
              <div style={{
                background: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)',
                borderRadius: '16px',
                padding: '2rem',
                color: '#2d3436',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Home & Living</h3>
                  <p style={{ marginBottom: '1rem', opacity: 0.8 }}>Home decoration and lifestyle products</p>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>30% Off</div>
                  <Link 
                    to="/products" 
                    style={{
                      background: 'rgba(45,52,54,0.1)',
                      color: '#2d3436',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      border: '1px solid rgba(45,52,54,0.2)'
                    }}
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Özellikler Bölümü */}
        <section style={{ background: '#f8fafc', padding: '3rem 2rem' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚚</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Free Shipping</h3>
                <p style={{ color: '#6b7280' }}>On orders over $50</p>
              </div>
              <div>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Secure Payment</h3>
                <p style={{ color: '#6b7280' }}>256-bit SSL encryption</p>
              </div>
              <div>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>↩️</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Easy Returns</h3>
                <p style={{ color: '#6b7280' }}>Free returns within 14 days</p>
              </div>
              <div>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎧</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>24/7 Support</h3>
                <p style={{ color: '#6b7280' }}>Customer service support</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
