// File: server/controllers/favoriteController.js

// In-memory data for simplicity
const users = [
  { username: 'marynaplp', favorites: [] },
  // other users...
];

exports.getFavorites = (req, res) => {
  const { username } = req.params;
  const user = users.find(u => u.username === username);

  if (user) {
    res.json(user.favorites);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

exports.updateFavorite = (req, res) => {
  const { username } = req.params;
  const { cryptoId, action } = req.body;

  const user = users.find(u => u.username === username);

  if (user) {
    if (action === 'add') {
      if (!user.favorites.includes(cryptoId)) {
        user.favorites.push(cryptoId);
      }
    } else if (action === 'remove') {
      user.favorites = user.favorites.filter(fav => fav !== cryptoId);
    }
    res.sendStatus(200);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};
