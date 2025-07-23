import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/Footer.jsx';

function AboutPage() {
  return (
    <div className="app">
      <Header />
      <main style={{ paddingTop: '80px', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)', minHeight: '100vh' }}>
        <div className="container" style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '2.5rem 1.5rem',
          background: 'white',
          borderRadius: '18px',
          boxShadow: '0 8px 32px rgba(60,80,120,0.10)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img src="https://img.icons8.com/fluency/96/shop.png" alt="ShopLux Logo" style={{ marginBottom: '1rem' }} />
            <h1 style={{ fontSize: '2.3rem', fontWeight: '800', color: '#2d3a4a', marginBottom: '0.5rem' }}>ShopLux</h1>
            <span style={{ fontSize: '1.1rem', color: '#636e7b' }}>Premium Store</span>
          </div>
          <p style={{ fontSize: '1.15rem', color: '#374151', marginBottom: '2rem', textAlign: 'center' }}>
            <b>ShopLux</b> is an e-commerce platform that offers premium products at the best prices with innovative technologies and customer-focused approach. We operate with the principles of secure shopping, fast delivery and quality service.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{
              background: '#f3f6fa',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(60,80,120,0.07)'
            }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.7rem', color: '#2d3a4a' }}>Our Vision</h2>
              <p style={{ color: '#475569' }}>
                To become Turkey's most innovative and reliable online shopping platform; to lead the industry by combining technology and customer satisfaction.
              </p>
            </div>
            <div style={{
              background: '#f3f6fa',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(60,80,120,0.07)'
            }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.7rem', color: '#2d3a4a' }}>Our Mission</h2>
              <p style={{ color: '#475569' }}>
                To deliver the highest quality products to our customers at the best prices and in the fastest way; to make shopping enjoyable and secure.
              </p>
            </div>
          </div>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '1rem', color: '#2d3a4a' }}>Our Team</h2>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                background: '#f9fafb',
                borderRadius: '10px',
                padding: '1rem 1.5rem',
                boxShadow: '0 1px 4px rgba(60,80,120,0.06)',
                minWidth: '160px'
              }}>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder" style={{ width: 56, height: 56, borderRadius: '50%', marginBottom: '0.5rem' }} />
                <div style={{ fontWeight: '600', color: '#2d3a4a' }}>Ahmet Yılmaz</div>
                <div style={{ fontSize: '0.95rem', color: '#636e7b' }}>Founder & CEO</div>
              </div>
              <div style={{
                background: '#f9fafb',
                borderRadius: '10px',
                padding: '1rem 1.5rem',
                boxShadow: '0 1px 4px rgba(60,80,120,0.06)',
                minWidth: '160px'
              }}>
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Marketing" style={{ width: 56, height: 56, borderRadius: '50%', marginBottom: '0.5rem' }} />
                <div style={{ fontWeight: '600', color: '#2d3a4a' }}>Elif Kaya</div>
                <div style={{ fontSize: '0.95rem', color: '#636e7b' }}>Marketing Director</div>
              </div>
              <div style={{
                background: '#f9fafb',
                borderRadius: '10px',
                padding: '1rem 1.5rem',
                boxShadow: '0 1px 4px rgba(60,80,120,0.06)',
                minWidth: '160px'
              }}>
                <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Technology" style={{ width: 56, height: 56, borderRadius: '50%', marginBottom: '0.5rem' }} />
                <div style={{ fontWeight: '600', color: '#2d3a4a' }}>Mehmet Demir</div>
                <div style={{ fontSize: '0.95rem', color: '#636e7b' }}>Technology Lead</div>
              </div>
            </div>
          </div>
          <div style={{
            background: '#f3f6fa',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(60,80,120,0.07)'
          }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.7rem', color: '#2d3a4a' }}>Contact Us</h2>
            <p style={{ color: '#475569', marginBottom: '0.5rem' }}>
              You can contact us for any questions, suggestions and collaborations.
            </p>
            <div>
              <span style={{ color: '#636e7b', fontWeight: '500' }}>Email: </span>
              <a href="mailto:info@shoplux.com" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>info@shoplux.com</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
