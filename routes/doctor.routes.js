// All doctor route end-points

const controller = require('../controllers/doctor.controllers')
const {doctorverify, jwtVerify} = require('../middleware')

module.exports = (app) => {

    // Route to create doctors detail
    app.post('/health/api/v1/docs', [doctorverify.doctorVerify, jwtVerify.verifyJwt],controller.create);

    // Route for get all doctor details
    app.get('/health/api/v1/docs', controller.findAll);

    // Route to get doctor details based on id;
    app.get('/health/api/v1/docs/:id', controller.findById);

    // Route for update doctor details
    app.put('/health/api/v1/docs/:id', [doctorverify.doctorVerify, jwtVerify.verifyJwt], controller.update);

    // Routes for delete doctor details
    app.delete('/health/api/v1/docs/:id',[doctorverify.doctorVerify, jwtVerify.verifyJwt],controller.delete);
}