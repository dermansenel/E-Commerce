import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/Footer.jsx';

function NotFoundPage() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container" style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>404 - Sayfa Bulunamadı</h1>
          <p>Aradığınız sayfa mevcut değil.</p>
          <a href="/" style={{ color: '#007bff', textDecoration: 'none' }}>
            Ana Sayfaya Dön
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
