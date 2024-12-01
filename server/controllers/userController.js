
// In-memory user store for simplicity
const users = [];

exports.signup = (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username already exists
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  // Create a new user and store it in memory
  const newUser = { username, email, password, favorites: [] };
  users.push(newUser);

  // Respond with the new user's data (excluding password for security)
  res.status(201).json({ username: newUser.username, email: newUser.email, favorites: newUser.favorites });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    res.json({ username: user.username, email: user.email, favorites: user.favorites });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
};

exports.getUser = (req, res) => {
  const { username } = req.params;
  const user = users.find(user => user.username === username);

  if (user) {
    res.json({ username: user.username, email: user.email, favorites: user.favorites });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};
