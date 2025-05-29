// File: src/components/FavoriteCryptos.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './cryptotable.css';

function FavoriteCryptos() {
  const { user } = useContext(AuthContext);

  const favoriteCryptos = user.cryptos.filter(crypto =>
    user.favorites.includes(crypto.id)
  );

  return (
    <div className="favorite-cryptos">
      <h2>My Favorite Cryptocurrencies</h2>
      {favoriteCryptos.length === 0 ? (
        <p>No favorite cryptocurrencies yet.</p>
      ) : (
        <div className="crypto-table">
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Market Cap</th>
              <th>Chart</th>
            </tr>
          </thead>
          <tbody>
            {favoriteCryptos.map(crypto => (
              <tr key={crypto.id}>
                <td>{crypto.name}</td>
                <td>${crypto.current_price.toFixed(2)}</td>
                <td className={crypto.price_change_percentage_24h < 0 ? 'negative' : 'positive'}>
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>${crypto.market_cap.toLocaleString()}</td>
                <td><img src={crypto.image} alt={crypto.name} width="20" /></td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FavoriteCryptos;
