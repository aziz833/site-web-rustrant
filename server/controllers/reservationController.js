const Reservation = require('../models/Reservation');
const { validationResult } = require('express-validator');

// @desc    Get all reservations
// @route   GET /api/reservations
// @access  Private/Admin
const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({}).sort({ date: 1, time: 1 });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a reservation
// @route   POST /api/reservations
// @access  Public
const createReservation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, phone, guests, date, time, message } = req.body;
    const reservation = new Reservation({
      name,
      phone,
      guests,
      date,
      time,
      message,
    });
    const createdReservation = await reservation.save();
    res.status(201).json(createdReservation);
  } catch (error) {
    res.status(400).json({ message: 'Invalid reservation data' });
  }
};

module.exports = { getReservations, createReservation };
