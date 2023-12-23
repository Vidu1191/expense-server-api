// app.js
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const usersRoute = require("./routes/users/usersRoute");
const dotenv = require("dotenv");

const app = express();

// Connect to the database
dbConnect();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", usersRoute);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Export the app
module.exports = app;
