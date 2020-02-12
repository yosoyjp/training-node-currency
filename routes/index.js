const express = require('express');
const router = express.Router();

const currencyRoutes = require('./currency');


router.use('/currency', currencyRoutes);

module.exports = router;
