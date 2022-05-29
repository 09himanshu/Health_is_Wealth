// This file contain all crud operation

const db = require('../models');
const TrackRecord = db.trackRecord;

// Handler for create
exports.create = (req, res) => {
    const obj = {
        visitPurpose: req.body.visitPurpose,
        height: req.body.height,
        weight: req.body.weight,
        date: Date.now(),
        userId: req.userId,
    }
    TrackRecord.create(obj).then(record => {
        res.status(201).send(record);
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}

// Handler for get all track record
exports.findAll = (req, res) => {
    TrackRecord.findAll().then(record => {
        res.status(200).send(record);
    }).catch()
}
