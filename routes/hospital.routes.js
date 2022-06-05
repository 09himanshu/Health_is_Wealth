// This file contail all routes end-points of hospital

const controller = require('../controllers/hospital.controller');
const {hospitalVerify, jwtVerify} = require('../middleware');

module.exports = (app) => { 

    // Create route for hospital
    app.post('/health/api/v1/hospitals',[hospitalVerify.verifyHospital,jwtVerify.verifyJwt,jwtVerify.isAdmin],controller.create);

    // get all details with search functionality 
    app.get('/health/api/v1/hospitals',controller.findAll);

    // get hospital based on id
    app.get('/health/api/v1/hospitals/:id', controller.findOne);

    // Handler for update
    app.put('/health/api/v1/hospitals/:id',[jwtVerify.verifyJwt,jwtVerify.isAdmin], controller.update);

    // Handler for delete
    app.delete('/health/api/v1/hospitals/:id', [jwtVerify.verifyJwt,jwtVerify.isAdmin], controller.delete);
}