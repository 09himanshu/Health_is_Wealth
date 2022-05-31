// This file will contain all end point of track record

const controller = require('../controllers/trackRecord.controller');
const {jwtVerify, verifyTrack} = require('../middleware');

module.exports = (app) => {

    // Route to create track record
    app.post('/health/api/v1/logs',[jwtVerify.verifyJwt, verifyTrack.trackVerify], controller.create);

    // Route to get all record 
    app.get('/health/api/v1/logs', controller.findAll);

    // Route for get record based on id
    app.get('/health/api/v1/logs/:id', controller.findOne);

    // Route for update track record
    app.put('/health/api/v1/logs/:id', controller.update);

    // Route for delete track records
    app.delete('/health/api/v1/logs/:id', controller.delete);
}