// This file have end-points for appointment

const controller = require('../controllers/appointment.controller');
const {appointVerify} = require('../middleware')

module.exports = (app) => {

    // Route for appointment creation
    app.post('/health/api/v1/appoint', [appointVerify.appointValidate], controller.create);

    // Route for get all appointment
    app.get('/health/api/v1/appoint', controller.findAll);

    // Route for get  appointment based on id
    app.get('/health/api/v1/appoint/:id', controller.findOne);

    // Route for update appointment
    app.put('/health/api/v1/appoint/:id', [appointVerify.appointValidate], controller.update);

    // Route for delete appointment
    app.delete('/health/api/v1/appoint/:id',[appointVerify.appointValidate] , controller.delete);
}