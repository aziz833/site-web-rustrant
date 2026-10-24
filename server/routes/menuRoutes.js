const express = require('express');
const router = express.Router();
const { getMenuItems, createMenuItem } = require('../controllers/menuController');

router.route('/').get(getMenuItems).post(createMenuItem);

module.exports = router;
