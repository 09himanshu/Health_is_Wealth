// This file will contain all curd logic


const db = require('../models');
const Presciption = db.presciption;

// Handler for create
exports.create = (req, res) => {
    const obj = {
        presciptionName: req.body.presciptionName,
        amount: req.body.amount,
        date: req.body.date,
        doctorId: req.body.doctorId,
    }
    Presciption.create(obj).then(done => {
        res.status(201).send(done);
    }).catch(err => {
        res.status(500).send({message: `Error occru at ${err}`});
    });
}


// Handler for get all presciption
exports.findAll = (req, res) => {
    let promise;
    let date = req.query.date;
    if(date) {
        promise = Presciption.findAll({
            where: {date}
        });
    } else {
        promise = Presciption.findAll();
    }

    promise.then(done => {
        res.status(200).send(done);
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}

// Handler to get presciption based on id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Presciption.findByPk(id).then(done => {
        res.status(200).send(done);
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}

// Handler for update presciption 
exports.update = (req, res) => {
    const id = req.params.id;
    const obj = {
        presciptionName: req.body.presciptionName,
        amount: req.body.amount,
        date: req.body.date,
    }
    Presciption.update(obj, {
        where: {id},
        returning: true,
    }).then(() => {
        Presciption.findByPk(id).then(update => {
            res.status(200).send(update);
        })
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}


// Handler for delete
exports.delete = (req, res) => {
    const id = req.params.id;
    Presciption.destroy({
        where: {id}
    }).then(() => {
        res.status(200).send({message: `Persciption deleted successfully`});
    }).catch(err => {
        res.status(500).send({message: `Error occru at ${err}`});  
    })
}