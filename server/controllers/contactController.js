// @desc    Handle contact form submission
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // In a real app, send an email here using nodemailer, sendgrid, etc.
    console.log(`Contact message received from ${name} (${email}): ${message}`);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { submitContact };
