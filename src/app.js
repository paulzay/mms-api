const express = require('express');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);

module.exports = app;