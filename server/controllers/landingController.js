const db = require('../model/sessionModel');

const landingController = {};

<<<<<<< HEAD
landingController.getData = async (req, res, next) => {
    // const myQuery = "SELECT NOW()";
    // const data = await db.query(myQuery);
    const data = [{
        message: 'This is a message from landingController\'s getData',
        resolved: false,
    }];
    req.body = data;
    console.log('completed query');
    return next();
=======
landingController.getAllTicketsEnd = async (req, res) => {
    const getAllTicketsQuery = 'SELECT * FROM "public"."request"';
    const { rows } = await db.query(getAllTicketsQuery); //rows array of objs
    res.status(200).json(rows.reverse());
>>>>>>> 06b34b0c00f70addb472d9daae06219403917c53
}

landingController.postTicketEnd = async (req, res) => {
    // TICKET INFO: date, status, details, user id, category
    // With ticket info to be on req.body
    //JOIN w/ Users Table
    //const postTicketQuery = `INSERT INTO Tickets (Details, UserID, Category, Status) VALUES ('${req.body.details}', '${req.body.userID}', '${req.body.category}', '${req.body.status}')`;
     
    const ticketInfo = {
        status: 'Unassigned',
        title: 'New issue',
        msg: 'Please help',
        uid: 4
    }
    console.log('req.body in post fxn: ', req.body);
    const postTicketQuery = `INSERT INTO request (Title, Description, Status, Uid) VALUES ('${ticketInfo.title}', '${req.body.message}', '${ticketInfo.status}', '${ticketInfo.uid}');`;
    await db.query(postTicketQuery);
    res.status(200);
}
/*
landingController.getAllUsersInfoEnd = async (req, res) => {
    const getAllUsersQuery = 'SELECT * FROM "public"."puser"';
    const { rows } = await db.query(getAllUsersQuery); //rows array of objs
    res.status(200).json(rows);
}

landingController.postNewUserEnd = async (req, res) => {
    const userInfo = {
        fname: 'Wunderpuss',
        lname: 'Photogenicus',
        email: 'wunderp@gmail.com',
        type: 'User',
        pword: 'ilovecookies!'
    }
    const postNewUserQuery = `INSERT INTO puser (First, Last, Email, Type, Password) VALUES ('${userInfo.fname}, '${userInfo.lname}', '${userInfo.email}', '${userInfo.type}', '${userInfo.pword}')`;
    db.query(postNewUserQuery);
    res.status(200).send();
}

*/
module.exports = landingController;