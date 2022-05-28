// This file have the entire crud operation logic

const db = require('../models');
const Appomit = db.appoint;

// Handler for create appointment
exports.create = (req, res) => {
    const obj = {
        userId: req.body.useerId,
        doctorId: req.body.doctorId,
        date: req.body.date,
        time: req.body.time,
    }
    Appomit.create(obj).then(appoint => {
        res.status(201).send(appoint)
    }).catch(err => {
        res.status(500).send({message: `Error occur at appoint creation ${err}`});
    });
}