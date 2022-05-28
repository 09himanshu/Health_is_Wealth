// This file verify the jwt token given by the user

const jwt = require('jsonwebtoken');
const config = require('../config/server.config');


const verifyJwt = (req,res,next) => {
    // Read token from headers
    let token = req.headers['x-access-token'];

    if(!token) {
        res.status(403).send({message: `No token provided`});
    }

    // verify token
    jwt.verify(token, config.secretkey, (err, decodetoken) => {
        if(err) {
            res.status(401).send({message: `Unauthorized`});
        }
        // Read the user from token and set it to req obj
        req.userId = decodetoken.id;
    });
    next();
}

module.exports = {
    verifyJwt
}