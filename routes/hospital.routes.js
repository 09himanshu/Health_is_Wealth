// This file contail all routes end-points of hospital

const controller = require('../controllers/hospital.controller');

module.exports = (app) => { 

    // Create route for hospital
    app.post('/health/api/v1/hospitals',controller.create);

    // get all details with search functionality 
    app.get('/health/api/v1/hospitals',controller.findAll);
}