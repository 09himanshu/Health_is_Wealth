// This file will contain all end point of track record

const controller = require('../controllers/trackRecord.controller');
const {jwtVerify} = require('../middleware');

module.exports = (app) => {

    // Route to create track record
    app.post('/health/api/v1/logs',[jwtVerify.verifyJwt], controller.create);
}