const express = require('express');
const router = express.Router();
const passport = require('passport');

// Google Login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('http://localhost:3000/dashboard');
  }
);

// Get Authenticated User Info
router.get('/me', (req, res) => {
  if (req.isAuthenticated()) {
    const user = {
      name: req.user.displayName,
      email: req.user.emails[0].value,
      avatar: req.user.photos[0].value,
    };
    res.json(user);
  } else {
    res.status(401).json({ message: 'Not logged in' });
  }
});

// ✅ Logout Route
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.clearCookie('connect.sid'); // Or your cookie name
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

module.exports = router;
