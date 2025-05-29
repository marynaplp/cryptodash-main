const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');

const app = express();
const port = 5001;

// Middleware
app.use(cors()); // 🔓 allow all for now
app.use(express.json()); // replaces bodyParser.json()
app.get('/test', (req, res) => {
  res.json({ message: 'CORS working!' });
});
// Routes
app.use('/users', userRoutes);
app.use('/favorites', favoriteRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

