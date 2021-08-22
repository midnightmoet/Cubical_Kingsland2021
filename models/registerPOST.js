const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = function (req,res){
    const body = req.body;
    const password = body.password;
    const username = body.username;
    const saltRounds = 8;

    //      bcrypt.hash(password, saltRounds);
};

// added 8/22, allows to register and log in and saves to MDB in users collection