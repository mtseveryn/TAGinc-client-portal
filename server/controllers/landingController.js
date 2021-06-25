const db = require('../model/sessionModel');

const landingController = {};

landingController.getData = async (req, res, next) => {
    // const myQuery = "SELECT NOW()";
    // const data = await db.query(myQuery);
    const data = {
        message: 'This is a message from landingController\'s getData'
    };
    res.status(200).json(data);
    //console.log('completed query');
    return next();
}

landingController.getMessage = (req, res, next) => {
let msgData = {
    message: "This is a test form getMessage."
}
res.status(200).json(msgData);
return next();
}
module.exports = landingController;