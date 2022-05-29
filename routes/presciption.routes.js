// This file will contain all end point operation
const controller = require('../controllers/presciption.controller');
const {presciptionVerify} = require('../middleware');

module.exports = (app) => {

    // Route for create presciption
    app.post('/health/api/v1/presciptions', [presciptionVerify.verifyPrescip], controller.create);

    // Route for get all presciption with filter faciliity
    app.get('/health/api/v1/presciptions', controller.findAll);

    // Route for get presciption based on id
    app.get('/health/api/v1/presciptions/:id', controller.findOne);

    // Route for update presciption
    app.put('/health/api/v1/presciptions/:id', controller.update);

    // Route for delete presciption
    app.delete('/health/api/v1/presciptions/:id', controller.delete);
}