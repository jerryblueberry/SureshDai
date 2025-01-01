const express = require('express');
const { addServices } = require('../controller/ServiceController/serviceController');
const router = express.Router();
// Later add validation

router.post('/add',addServices);

module.exports = router;