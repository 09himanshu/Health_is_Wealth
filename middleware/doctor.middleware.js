// This file will validate the doctor details

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
    next();
}

module.exports = {
    doctorVerify
}