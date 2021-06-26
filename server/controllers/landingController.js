const db = require('../model/sessionModel');

const landingController = {};

landingController.getAllTicketsEnd = async (req, res) => {
    const getAllTicketsQuery = 'SELECT * FROM "public"."request"';
    const { rows } = await db.query(getAllTicketsQuery); //rows array of objs
    res.status(200).json(rows);
}

landingController.postTicketEnd = async (req, res) => {
    // TICKET INFO: date, status, details, user id, category
    // With ticket info to be on req.body
    //JOIN w/ Users Table
    //const postTicketQuery = `INSERT INTO Tickets (Details, UserID, Category, Status) VALUES ('${req.body.details}', '${req.body.userID}', '${req.body.category}', '${req.body.status}')`;
     
    const ticketInfo = {
        status: 'Unassigned',
        title: 'New issue',
        msg: 'Please help'
    }
    const postTicketQuery = `INSERT INTO request (Title, Description, Status) VALUES ('${ticketInfo.title}', '${req.body}', '${ticketInfo.status}');`;
    db.query(postTicketQuery);
    res.status(200).send();
}
/*
landingController.getAllUsersInfoEnd = async (req, res) => {
    const getAllUsersQuery = 'SELECT * FROM "public"."user"';
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
    const postNewUserQuery = `INSERT INTO user (First, Last, Email, Type, Password) VALUES ('${userInfo.fname}, '${userInfo.lname}', '${userInfo.email}', '${userInfo.type}', '${userInfo.pword}')`;
    db.query(postNewUserQuery);
    res.status(200).send();
}

*/
module.exports = landingController;