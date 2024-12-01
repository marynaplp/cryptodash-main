import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import CryptoTable from './Cryptotable';

function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const handleFavorite = (crypto) => {
    const updatedFavorites = user.favorites.includes(crypto.id)
      ? user.favorites.filter(fav => fav !== crypto.id)
      : [...user.favorites, crypto.id];

    setUser({ ...user, favorites: updatedFavorites });
  };
  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <CryptoTable cryptos={user.cryptos} onFavorite={handleFavorite} />
    </div>
  );
}

export default Profile;
