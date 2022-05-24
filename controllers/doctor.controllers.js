/**
 * This file perform all logical curd operation of doctor schema
 */

const db = require('../models');
const Doctor = db.doctor;

// Create doctor handler
exports.create = (req, res) => {
    const obj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    }
    Doctor.create(obj).then(done => {
        res.status(201).send(done);
    }).catch(err => {
        res.status(500).send({message: `Error occur at doctor creat ${err}`});
    })
}

// get doctor handler
exports.findAll = (req, res) => {
    let promise;
    let firstName = req.query.firstName;
    if(firstName) {
        promise = Doctor.findAll({
            where: {firstName}
        });
    }else {
        promise = Doctor.findAll();
    }
    promise.then(doctor => {
        res.status(200).send(doctor);
    }).catch(err => {
        res.status(500).send({message: `Error occur at doctor findAll ${err}`});
    })
}

// Handler for get doctor details based on id
exports.findById = (req, res) => {
    let id = req.params.id;
    Doctor.findByPk(id).then(doc => {
        res.status(200).send(doc);
    }).catch(err => {
        res.status(500).send({message: `Error occur at find by id ${err}`});
    })
}

// Handler for update
exports.update = (req, res) => {
    const obj ={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
    }
    let id = req.params.id;
    Doctor.update(obj,{
        where: {id},
        returning: true
    }).then(() => {
        Doctor.findByPk(id).then(doc => {
            res.status(201).send(doc);
        })
    }).catch(err => {
        res.status(500).send({message: `Error occur at doctor update ${err}`});
    })
}

// Handler for delete
exports.delete = (req, res) => {
    let id = req.params.id;
    Doctor.destroy({
        where: {id}
    }).then(() => {
        res.status(203).send({message: `Doctor deleted successfully`});
    });
}
