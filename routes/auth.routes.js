/**
 * This file contain end-points of user 
 */

const controller = require('../controllers/auth.controller');
const {authVerify} = require('../middleware');

module.exports = (app) => {
    // Signup user
    app.post('/health/api/v1/signup', [authVerify.verifyUser], controller.signup);

    // Signin user
    app.post('/health/api/v1/signin', controller.signin)

}