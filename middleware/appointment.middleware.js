// This file will contain appointment validation

const db = require('../models');
const User = db.user;
const Doctor = db.doctor;

const appointValidate = (req, res, next) => {

    // Check paitentId
    if(!req.body.userId) {
        return res.status(400).send({message: `PaitentId is not provided , Fill it !!!!1`});
    } 

    // check doctor Id
    if(!req.body.doctorId) {
        return res.status(400).send({message: `Doctor id is not provided, Fill it !!!!!!!!`});
    }

    // Check for valid ids
    User.findByPk(req.body.userId).then(paitent => {
        if(!paitent) {
            return res.status(403).send({message: `Invalid paitent id`});
        }
        Doctor.findByPk(req.body.doctorId).then(doctor => {
            if(!doctor) {
                return res.status(403).send({message: `Invalid doctor id`});
            }
            next();
        })
    })
}

module.exports = {
    appointValidate
}