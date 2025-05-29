import React from 'react';
import { Link } from 'react-router-dom';
import './CryptoItem.css';

function CryptoItem({ crypto }) {
  return (
    <Link to={`/coin/${crypto.id}`} className="crypto-link">
      <div className="crypto-item">
        <img src={crypto.image} alt={crypto.name} />
        <h2>{crypto.name}</h2>
        <p>Current Price: ${crypto.current_price}</p>
        <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p>
      </div>
    </Link>
  );
}

export default CryptoItem;