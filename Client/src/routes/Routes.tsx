import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop.jsx';
import HomePage from '../pages/HomePage.jsx';
import ProductsPage from '../pages/ProductsPage.jsx';
import ProductDetailPage from '../pages/ProductDetailPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
