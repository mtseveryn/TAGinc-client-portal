const express = require('express');
const { getAllTicketsEnd, postTicketEnd } = require('../controllers/landingController');
const router = express.Router();

router.get('/data', getAllTicketsEnd);



router.post('/message', postTicketEnd);


module.exports = router;