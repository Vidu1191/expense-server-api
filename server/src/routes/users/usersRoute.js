const express = require('express');
const usersRoute = express.Router();
const { registerUser, fetchUsersCtrl } = require('../../controllers/users/userCntrl'); // Corrected the function name

usersRoute.post('/register', registerUser);
usersRoute.get('/', fetchUsersCtrl); // Corrected the function name

module.exports = usersRoute;