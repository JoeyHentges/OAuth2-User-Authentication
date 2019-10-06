const express = require('express');

// Bring in routes
const UpdateLogs = require('./Update-Logs');

const router = express.Router();

// Add routes to the router
router.use('/', UpdateLogs.routes);

module.exports.routes = router;
