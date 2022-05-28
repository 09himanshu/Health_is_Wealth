/**
 * This file will contail the user curd operation logic
 */


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/server.config');
const db = require('../models');
const User = db.user

// Signup handler
exports.signup = (req, res) => {
    const obj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password),
    }
    User.create(obj).then(done => {
        res.status(201).send(done);
    }).catch(err => {
        res.status(500).send({message: `Error occur at user creation ${err}`});
    })
}


// signin handler

exports.signin = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    User.findOne({
        where : {email}
    }).then(user => {
        // check user is present or not
        if(!user) {
            return res.status(404).send({message: `User not found`});
        }

        // check password
        let isValid = bcrypt.compareSync(password, user.password);
        if(!isValid) {
            return res.status(401).send({message: `Invalid password`});
        }

        //generate token
        let token = jwt.sign({id : user.id}, config.secretkey, {
            expiresIn: 1000
        });

        // res.status(200).send(token);
        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            token: token
        });

    }).catch(err => {
        console.log(err);
        res.status(500).send({message: `Error occur at user signin ${err}`});
    })
}