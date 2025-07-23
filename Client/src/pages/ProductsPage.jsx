import React from 'react';
import Header from '../components/header.jsx';
import ProductList from '../components/ProductList.jsx';
import Footer from '../components/Footer.jsx';

function ProductsPage() {
  return (
    <div className="app">
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              marginBottom: '1rem',
              color: '#111827'
            }}>
              All Products
            </h1>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover our premium quality products
            </p>
          </div>
          <ProductList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductsPage;
