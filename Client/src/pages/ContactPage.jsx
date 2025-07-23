import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/Footer.jsx';

function ContactPage() {
  return (
    <div className="app">
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <div className="container" style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Contact</h1>
          <p style={{ marginBottom: '2rem', color: '#374151' }}>
            You can use the information below to contact us.
          </p>
          <div style={{ background: '#f3f6fa', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(60,80,120,0.07)' }}>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Address:</strong> Maslak District, Büyükdere Ave. No:255, 34398 Şişli/Istanbul
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Phone:</strong> +90 (212) 123 45 67
            </div>
            <div>
              <strong>Email:</strong> <a href="mailto:info@shoplux.com" style={{ color: '#2563eb', textDecoration: 'none' }}>info@shoplux.com</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
