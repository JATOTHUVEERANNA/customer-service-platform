// middleware/authMiddleware.js

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      return res.status(401).json({ message: 'Unauthorized: Please log in first.' });
    }
  };
  
  module.exports = isAuthenticated;
  