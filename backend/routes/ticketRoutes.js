const express = require('express');
const router = express.Router();
const { createTicket, getTickets } = require('../controllers/ticketController');

// Protect routes with auth middleware
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: 'Unauthorized' });
};

router.post('/', isAuthenticated, createTicket);
router.get('/', isAuthenticated, getTickets);

module.exports = router;
