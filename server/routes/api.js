const express = require('express');
const landingController = require('../controllers/landingController');
const router = express.Router();

router.get('/data', landingController.getData,
(req, res) => {
    console.log("req.message", req.message);
    res.status(200).json({message: 'You have a successful get req in api.js'})}
);



router.post('/message', landingController.getMessage,
(req, res) => res.status(200).json({message: "Post Successful - you got this diagnostic message ok"}));


module.exports = router;