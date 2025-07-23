import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5298/api/product')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setProducts(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  if (loading) return <div className="loading">Loading products...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1 className="product-list-title">Premium Products</h1>
        <p className="product-list-subtitle">Discover our exclusive collection</p>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
