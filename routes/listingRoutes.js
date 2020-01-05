var express = require('express');
const listingController = require('../controllers/listingController');

const router = express.Router();

router.get('/api/needlist', listingController.getFullList);

module.exports = router;
