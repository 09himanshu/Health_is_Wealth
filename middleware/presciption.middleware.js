// This file will validate presciption middleware

const db = require('../models');
const Doctor = db.doctor;

const verifyPrescip = (req, res, next) => {

    // check presciption name
    if(!req.body.presciptionName) {
        return res.status(400).send({message: `Presciption name is not provided`});
    }

    // check amount
    if(!req.body.amount || req.body.amount <= 0) {
        return res.status(400).send({message: `Amount is not provided`});
    }

    // check doctor id
    if(!req.body.doctorId) {
        return res.status(400).send({message: `Doctor id is not provided`});
    }

    // Check valid doctor id
    if(req.body.doctorId) {
        Doctor.findByPk(req.body.doctorId).then(doctor => {
            if(!doctor) {
                return res.status(404).send({message: `Invalid Doctor id`});
            }
            next();
        })
    }
}

module.exports = {
    verifyPrescip
}