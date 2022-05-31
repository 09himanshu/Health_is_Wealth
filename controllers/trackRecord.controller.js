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
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}

// Handler for get trackrecord based on id

exports.findOne = (req, res) => {
    let id = req.params.id;
    TrackRecord.findByPk(id).then(record => {
        res.status(200).send(record);
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}


// Handler for update track record
exports.update = (req, res) => {
    const obj = {
        visitPurpose: req.body.visitPurpose,
        height: req.body.height,
        weight: req.body.weight,
    }
    let id = req.params.id;
    TrackRecord.update(obj, {
        where: {id},
        returning: true
    }).then(() => {
        TrackRecord.findByPk(id).then(obj => {
            res.status(203).send(obj);
        })
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}

// Handler for delete track record
exports.delete = (req, res) => {
    let id = req.params.id;
    TrackRecord.destroy({
        where: {id}
    }).then(() => {
        res.status(200).send({message: `Record deleted successfully`});
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`})
    })
}