const express = require('express');
const { addServices, getData } = require('../controller/ServiceController/serviceController');
const router = express.Router();
// Later add validation

router.post('/add',addServices);
router.get('/',getData)
module.exports = router;