// This file will validate the hospital detail

const verifyHospital = (req, res, next) => {

    // check hospitalname
    if(!req.body.hospitalName) {
        return res.status(400).send({message: `Hospital name is not given , Fill it !!!`});
    }

    // check address
    if(!req.body.address) {
        return res.status(400).send({message: `Address is not given , Fill it !!!`});
    }

    // check city
    if(!req.body.city) {
        return res.status(400).send({message: `Phone is not given , Fill it !!!`});
    }
    
    // check state
    if(!req.body.state) {
        return res.status(400).send({message: `State is not given , Fill it !!!`});
    }

    // check zipcode
    if(!req.body.zipcode) {
        return res.status(400).send({message: `Zipcode is not given , Fill it !!!`});
    }

    if(!req.body.phone) {
        return res.status(400).send({message: `Phone is not given , Fill it !!!`});
    }
    next();
}

module.exports = {
    verifyHospital
}