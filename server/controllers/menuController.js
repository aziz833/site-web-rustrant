const Menu = require('../models/Menu');

// @desc    Get all menu items
// @route   GET /api/menu
// @access  Public
const getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find({});
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a menu item
// @route   POST /api/menu
// @access  Public (Should be protected in prod)
const createMenuItem = async (req, res) => {
  try {
    const { name, description, price, category, image, tags } = req.body;
    const menuItem = new Menu({
      name,
      description,
      price,
      category,
      image,
      tags,
    });
    const createdMenuItem = await menuItem.save();
    res.status(201).json(createdMenuItem);
  } catch (error) {
    res.status(400).json({ message: 'Invalid menu item data' });
  }
};

module.exports = { getMenuItems, createMenuItem };
