import React from 'react';
import './CryptoItem.css';

function CryptoItem({ crypto }) {
  return (
    <div className="crypto-item">
      <img src={crypto.image} alt={crypto.name} />
      <h2>{crypto.name}</h2>
      <p>Current Price: ${crypto.current_price}</p>
      <p>Market Cap: ${crypto.market_cap}</p>
    </div>
  );
}

export default CryptoItem;