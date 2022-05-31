
const db = require('../models');
const Symptom = db.symptom;

// Handler for create
exports.create = (req, res) => {
    const obj = {
        symptomName: req.body.symptomName,
        symptomType: req.body.symptomType,
        testDate: req.body.testDate,
        testTime: req.body.testTime,
    }
    Symptom.create(obj).then(obj => {
        res.status(200).send(obj);
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}

// Hnadler for get all
exports.findAll = (req, res) => {
    Symptom.findAll().then(obj => {
        res.status(200).send(obj);
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}


// Handler for update
exports.update = (req, res) => {
    const obj = {
        symptomName: req.body.symptomName,
        symptomType: req.body.symptomType,
    }
    let id = req.params.id;
    Symptom.update({
        where: {id},
        returning: true,
    }).then(() => {
        Symptom.findByPk(id).then(obj => {
            res.status(200).send(obj);
        })
    }).catch(err => {
        res.status(500).send({message: `Error occur at ${err}`});
    })
}

// Handler for delete
exports.delete = (req, res) => {
    let id = req.params.id;
    Symptom.destroy({
        where: {id}
    }).then(() => {
        res.status(200).send({message: `Symptom deleted successfully`});
    }).catch(err => {
        res.status(200).send({message:`Error occur at ${err}`});
    })
}