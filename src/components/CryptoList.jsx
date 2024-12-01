import React, { useState, useEffect } from 'react';
import CryptoItem from './CryptoItem';
import './CryptoList.css';

function CryptoList() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => {
        setCryptos(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="crypto-list">
      {cryptos.map(crypto => (
        <CryptoItem key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
}

export default CryptoList;