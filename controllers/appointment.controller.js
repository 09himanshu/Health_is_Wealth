// This file have the entire crud operation logic

const db = require('../models');
const Apponit = db.appoint;
const User = db.user;
const Doctor = db.doctor;

// Handler for create appointment
exports.create = (req, res) => {
    const obj = {
        userId: req.body.userId,
        doctorId: req.body.doctorId,
        date: req.body.date,
        time: req.body.time,
    }
    Apponit.create(obj).then(appoint => {
        res.status(201).send(appoint)
    }).catch(err => {
        res.status(500).send({message: `Error occur at appoint creation ${err}`});
    });
}

// Handler for get appointment
exports.findAll = (req, res) => {
    let promise;
    let date = req.query.date;
    if(date) {
        promise = Apponit.findAll({
            where: {date}
        })
    }else {
        promise = Apponit.findAll();
    }
    promise.then(all => {
        res.status(200).send(all);
    }).catch(err => {
        res.status(500).send({message: `Error occur at get all appointment ${err}`});
    })
}

// Handler for get appointment by id
exports.findOne = (req, res) => {
    let id = req.params.id;
    let paitentName;
    let doctorName;
    Apponit.findByPk(id).then(data => {
        if(!data) {
            return res.status(404).send({message: `No appointment fixed yet`});
        }
        User.findByPk(data.userId).then(user => {
            paitentName = user.firstName+' '+user.lastName;

            Doctor.findByPk(data.doctorId).then(doctor => {
                doctorName = doctor.firstName+' '+doctor.lastName;
                res.status(200).send({
                    paitentName: paitentName,
                    doctorName: doctorName,
                })
            });
        });
    }).catch(err => {
        res.status(500).send({message: `Error occur at fetch appointment by id ${err}`});
    })
}

// Handler for update
exports.update = (req, res) => {
    const id = req.params.id;
    const obj = {
        date: req.body.date,
        time: req.body.time,
    }
    Apponit.update(obj, {
        where: {id},
        returning: true,
    }).then(() => {
        Apponit.findByPk(id).then(update => {
            res.status(202).send(update);
        })
    }).catch(err => {
        res.status(500).send({ message: `Error occur at update ${err}`});
    })
}

// Handler for delete
exports.delete = (req, res) => {
    let id = req.params.id;
    Apponit.destroy({
        where: {id},
    }).then(() => {
        res.status(204).send({message: `Appointment deleted successfully`});
    }).catch(err => {
        res.status(500).send({message: `Error occur at delete hospital ${err}`});
    })
}