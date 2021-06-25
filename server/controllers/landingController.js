const db = require('../model/sessionModel');

const landingController = {};

landingController.getDate = async (req, res, next) => {
    const myQuery = "SELECT NOW()";
    const data = await db.query(myQuery);
    res.status(200).json(data);
    console.log('completed query');
    return next();
}

module.exports = landingController;