// This file will validate track record table

const trackVerify = (req, res, next) => {

    // check visiting purpose
    if(!req.body.visitPurpose) {
        return res.status(400).send({message: `Visiting purpose is not provided`});
    }

    // Check height
    if(!req.body.height) {
        return res.status(400).send({message: `Height is not provided`});
    }

    // Check weight
    if(!req.body.weight) {
        return res.status(400).send({message: `Weight is not provided`});
    }
    next();
}

module.exports = {
    trackVerify
}