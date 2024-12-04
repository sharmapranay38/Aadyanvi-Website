import React from 'react';
import "./Stockpage.css"
const StockPage = () => {
  return (
    <div className="stock-container">
      {/* Stock Info */}
      <div className="stock-header">
        <h1 className="stock-name">Aadyanvi Group</h1>
        <div className="stock-price">
          <h2>24,467.45</h2>
          <span className="price-change">+10.30 (0.04%)</span>
        </div>
      </div>
      
      {/* Graph Section */}
      <div className="stock-graph">
        <img src="/graph.jpg" alt="Stock graph"         style={{
          width: '500px',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
        }} />
        {/* You can replace the above image with a graph library like Chart.js for dynamic data */}
      </div>

      {/* Market Data */}
      <div className="market-data">
        <div className="market-item">
          <h3>Open</h3>
          <p>24,488.75</p>
        </div>
        <div className="market-item">
          <h3>High</h3>
          <p>24,573.20</p>
        </div>
        <div className="market-item">
          <h3>Low</h3>
          <p>24,366.30</p>
        </div>
        <div className="market-item">
          <h3>Advances</h3>
          <p>20</p>
        </div>
        <div className="market-item">
          <h3>Declines</h3>
          <p>30</p>
        </div>
      </div>

      {/* Additional Info (can include stock news, other indices) */}
      <div className="additional-info">
        <h3>Recent News</h3>
        <p>Stock news and updates...</p>
      </div>
    </div>
  );
};

export default StockPage;
