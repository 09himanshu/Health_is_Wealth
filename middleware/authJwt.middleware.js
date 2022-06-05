// This file verify the jwt token given by the user

const jwt = require('jsonwebtoken');
const config = require('../config/server.config');
const db = require('../models');
const User = db.user;

const verifyJwt = (req,res,next) => {
    // Read the token from header
    let token = req.headers['x-access-token'];
    
    if(!token) {
        return res.status(403).send({message: `No token provided`});
    }

    // check the validity of token
    jwt.verify(token, config.secretkey, (err, decodedToken) => {
        if(err) {
            return res.status(401).send({message: `Unauthorized`});
        }
        // Reading the user from the token and setting it in the req object 
        req.userId = decodedToken.id;
        next();
    });
}

const isAdmin = (req, res, next) => {
    //Using the userId I will fetch the user object from db and check the user type
    User.findByPk(req.userId).then( user => {
        user.getRoles().then(roles => {
            for(let i = 0; i < roles.length; i++) {
                if(roles[i].name == "admin") {
                    next();
                    return;
                }
            }
            return res.status(403).send({ message: `Admin user required for this`});
        })
    })
}

module.exports = {
    verifyJwt, isAdmin
}