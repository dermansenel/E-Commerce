import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';
import './SearchFilter.css';

function SearchFilter({ onSearch, onFilter, categories, }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch && onSearch(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    applyFilters({ category, priceRange: selectedPriceRange, sortBy });
  };

  const handlePriceChange = (e) => {
    const newRange = [...selectedPriceRange];
    newRange[e.target.name === 'min' ? 0 : 1] = parseInt(e.target.value);
    setSelectedPriceRange(newRange);
    applyFilters({ category: selectedCategory, priceRange: newRange, sortBy });
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    applyFilters({ category: selectedCategory, priceRange: selectedPriceRange, sortBy: sort });
  };

  const applyFilters = (filters) => {
    onFilter && onFilter(filters);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange([0, 10000]);
    setSortBy('featured');
    setSearchTerm('');
    applyFilters({ category: 'all', priceRange: [0, 10000], sortBy: 'featured' });
    onSearch && onSearch('');
  };

  return (
    <div className="search-filter">
      <div className="search-filter__container">
        
        {/* Search Bar */}
        <div className="search-section">
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="search-clear"
                onClick={() => {
                  setSearchTerm('');
                  onSearch && onSearch('');
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Toggle (Mobile) */}
        <button 
          className="filter-toggle"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <SlidersHorizontal size={20} />
          <span>Filtreler</span>
        </button>

        {/* Filters */}
        <div className={`filters-section ${isFilterOpen ? 'filters-section--open' : ''}`}>
          
          {/* Categories */}
          <div className="filter-group">
            <h4 className="filter-title">Kategoriler</h4>
            <div className="category-filters">
              <button
                className={`category-btn ${selectedCategory === 'all' ? 'category-btn--active' : ''}`}
                onClick={() => handleCategoryChange('all')}
              >
                Tümü
              </button>
              {categories?.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.name ? 'category-btn--active' : ''}`}
                  onClick={() => handleCategoryChange(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="filter-group">
            <h4 className="filter-title">Fiyat Aralığı</h4>
            <div className="price-range">
              <div className="price-inputs">
                <div className="price-input-group">
                  <label>Min</label>
                  <input
                    type="number"
                    name="min"
                    value={selectedPriceRange[0]}
                    onChange={handlePriceChange}
                    className="price-input"
                  />
                </div>
                <span className="price-separator">-</span>
                <div className="price-input-group">
                  <label>Max</label>
                  <input
                    type="number"
                    name="max"
                    value={selectedPriceRange[1]}
                    onChange={handlePriceChange}
                    className="price-input"
                  />
                </div>
              </div>
              <div className="price-range-slider">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={selectedPriceRange[0]}
                  onChange={(e) => {
                    const newRange = [parseInt(e.target.value), selectedPriceRange[1]];
                    setSelectedPriceRange(newRange);
                    applyFilters({ category: selectedCategory, priceRange: newRange, sortBy });
                  }}
                  className="range-slider range-slider--min"
                />
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={selectedPriceRange[1]}
                  onChange={(e) => {
                    const newRange = [selectedPriceRange[0], parseInt(e.target.value)];
                    setSelectedPriceRange(newRange);
                    applyFilters({ category: selectedCategory, priceRange: newRange, sortBy });
                  }}
                  className="range-slider range-slider--max"
                />
              </div>
            </div>
          </div>

          {/* Sort Options */}
          <div className="filter-group">
            <h4 className="filter-title">Sıralama</h4>
            <div className="sort-options">
              {[
                { value: 'featured', label: 'Öne Çıkanlar' },
                { value: 'price-low', label: 'Fiyat: Düşükten Yükseğe' },
                { value: 'price-high', label: 'Fiyat: Yüksekten Düşüğe' },
                { value: 'newest', label: 'En Yeniler' },
                { value: 'rating', label: 'En Çok Beğenilenler' }
              ].map(option => (
                <label key={option.value} className="sort-option">
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    checked={sortBy === option.value}
                    onChange={() => handleSortChange(option.value)}
                  />
                  <span className="sort-label">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button className="clear-filters" onClick={clearFilters}>
            <X size={16} />
            Filtreleri Temizle
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
