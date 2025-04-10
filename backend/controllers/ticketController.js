const Ticket = require('../models/Ticket');

exports.createTicket = async (req, res) => {
  try {
    const { category, comment } = req.body;
    const ticket = new Ticket({
      user: req.user._id,
      category,
      comment,
    });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user._id });
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
