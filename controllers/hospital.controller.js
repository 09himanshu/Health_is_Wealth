/**
 * This file contain all curd operation of hospital schema 
 */
const db = require('../models');
const Hospital = db.hospital;

// Hadler for hospital creation
exports.create = (req, res) => {
    const obj = {
        hospitalName: req.body.hospitalName,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        phone: req.body.phone
    }
    Hospital.create(obj).then(done => {
        res.status(201).send(done);
    }).catch(err => {
        res.status(500).send({message: `Error occur at hospital creation ${err}`});
    })
}

// Handler for get all hospital details with search facilities
exports.findAll = (req, res) => {
    let hospitalName = req.query.hospitalName;
    let zipcode = req.query.zipcode;
    let city = req.query.city;
    let promise;

    if(hospitalName) {
        promise = Hospital.findAll({
            where: {hospitalName}
        });
    } else if(zipcode) {
        promise = Hospital.findAll({
            where: {zipcode}
        })
    } else if(city) {
        promise = Hospital.findAll({
            where: {city}
        })
    } else {
        promise = Hospital.findAll();
    }
    promise.then(done => {
        res.status(200).send(done);
    }).catch(err => {
        res.status(500).send({message: `Error occur at fetch hospital details ${err}`});
    })
}