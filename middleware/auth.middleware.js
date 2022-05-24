/**
 * This file check the validation of user 
 */

const db = require('../models')
const User = db.user;
const verifyUser = (req, res, next) => {

    // check firstname
    if(!req.body.firstName) {
        return res.status(400).send({message: `First name is not given , Fill it !!!`});
    }

    // check lastName
    if(!req.body.lastName) {
        return res.status(400).send({message: `Last name is not given , Fill it !!!`});
    }

    // check username
    if(!req.body.username) {
        return res.status(400).send({message: `username is not given , Fill it !!!`});
    }

    // password
    if(!req.body.password) {
        return res.status(400).send({message: `Password is not given , Fill it !!!`});
    }

    // phone
    if(!req.body.phone) {
        return res.status(400).send({message: `Phone is not given , Fill it !!!`});
    }

    // check phone no. length
    if(req.body.phone.length != 10) {
        return res.status(400).send({message: `Invalid phone number  , check once !!!`});
    }

    // email
    if(!req.body.email) {
        return res.status(400).send({message: `email is not given , Fill it !!!`});
    }

        // check unique username
    User.findOne({
        where: {username: req.body.username}
    }).then(user => {
        if(user) {
            res.status(403).send({message: `Username is already taken try other name with alpha numaric character`});
            return;
        }
    
        // check unique email
        User.findOne({
            where: {email: req.body.email}
        }).then(user => {
            if(user) {
                return res.status(403).send({message: `Email is already taken try other name with alpha numaric character`});
            }
            next();
        }) 
    }) 
}

module.exports = {
    verifyUser
}