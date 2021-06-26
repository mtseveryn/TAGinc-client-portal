const db = require('../model/sessionModel');

const landingController = {};

landingController.getData = async (req, res, next) => {
    // const myQuery = "SELECT NOW()";
    // const data = await db.query(myQuery);
    const data = [{
        message: 'This is a message from landingController\'s getData'
    }];
    req.body = data;
    console.log('completed query');
    return next();
}

landingController.getMessage = (req, res, next) => {
let msgData = req.body
console.log('getMessage: ', msgData.message)
return next();
}
module.exports = landingController;