// This file will validate the doctor details

const db = require('../models');
const Hospital = db.hospital;

const doctorVerify = (req,res,next) => {

    // check firstname
    if(!req.body.firstName) {
        return res.status(400).send({message: `First name is not given , Fill it !!!`});
    }

    // check lastName
    if(!req.body.lastName) {
        return res.status(400).send({message: `Last name is not given , Fill it !!!`});
    }

    // phone
    if(!req.body.phone) {
        return res.status(400).send({message: `Phone is not given , Fill it !!!`});
    }
    
    // check phone no. length
    if(req.body.phone.length != 10) {
        return res.status(400).send({message: `Invalid phone number  , check once !!!`});
    }

    // check for valid hospital foreign key
    if(req.body.hospitalId) {
        Hospital.findByPk(req.body.hospitalId).then(hospital => {
            if(!hospital) {
                return res.status(404).send({message: `Invalid key`});
            }
            next();
        })
    } else {
        res.status(400).send({message: `Key is not provided, Fill it !!!`});
    }
}

module.exports = {
    doctorVerify
}