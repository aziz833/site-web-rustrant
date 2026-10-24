const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { getReservations, createReservation } = require('../controllers/reservationController');

router.route('/')
  .get(getReservations)
  .post(
    [
      body('name').notEmpty().withMessage('Name is required'),
      body('phone').notEmpty().withMessage('Phone is required'),
      body('guests').isNumeric().withMessage('Guests must be a number'),
      body('date').notEmpty().withMessage('Date is required'),
      body('time').notEmpty().withMessage('Time is required'),
    ],
    createReservation
  );

module.exports = router;
