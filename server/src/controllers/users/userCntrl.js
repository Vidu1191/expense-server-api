const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/User');

// Register
const registerUser = expressAsyncHandler(async (req, res) => {
  const { email, firstname, lastname, password } = req.body;

  try {
    // Check if user exists
    const userExists = await User.findOne({ email: req.body.email });
    
    if (userExists) {
      throw new Error("User already exists");
    }

    // Create a new user
    const user = await User.create({ email, firstname, lastname, password });
    
    // Send a success response
    res.status(201).json(user);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Fetch all users
const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = { registerUser, fetchUsersCtrl };
