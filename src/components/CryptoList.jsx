import React, { useState, useEffect } from 'react';
import CryptoItem from './CryptoItem';
import './CryptoList.css';

function CryptoList() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;

        const response = await fetch(proxyUrl);
        const data = await response.json();
        setCryptos(data);
        setLoading(false);
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="crypto-list">
      {Array.isArray(cryptos) && cryptos.map(crypto => (
  <CryptoItem key={crypto.id} crypto={crypto} />
))}
    </div>
  );
}

export default CryptoList;
