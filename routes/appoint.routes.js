// This file have end-points for appointment

const controller = require('../controllers/appointment.controller');

module.exports = (app) => {

    // Route for appointment creation
    app.post('/health/api/v1/hospitals', controller.create);
}