import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CoinDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!coin) return <p>Coin not found.</p>;

  return (
    <div>
      <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
      <p>Current price: ${coin.market_data.current_price.usd}</p>
      <p>All-time high: ${coin.market_data.ath.usd} on {coin.market_data.ath_date.usd.slice(0, 10)}</p>
      <p>Market cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
      <p>Volume: {coin.market_data.total_volume.usd.toLocaleString()}</p>
      <p>Hashing algorithm: {coin.hashing_algorithm || 'N/A'}</p>
      {/* Add chart if needed */}
    </div>
  );
}

export default CoinDetail;