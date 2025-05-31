const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  console.log('Authenticating request:', req.method, req.path);
  console.log('Headers:', req.headers);
  
  // Vérifier si l'entête d'autorisation existe
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.log('No Authorization header');
    return res.status(401).json({ message: 'No Authorization header' });
  }

  // Extraire le token
  const token = authHeader.split(' ')[1];
  if (!token) {
    console.log('Invalid Authorization header format');
    return res.status(401).json({ message: 'Invalid Authorization header format' });
  }

  console.log('Token:', token);
  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  // Vérifier le token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('JWT verification error:', err);
      console.log('Error name:', err.name);
      console.log('Error message:', err.message);
      return res.status(403).json({ 
        message: 'Invalid token',
        error: err.message
      });
    }
    
    console.log('Token verified successfully');
    console.log('Decoded user:', user);
    
    req.user = user;
    console.log('Request body:', req.body);
    next();
  });
};

module.exports = authenticateToken;
