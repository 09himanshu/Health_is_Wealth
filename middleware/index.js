// this file collect all middleware file and distribute it as requirement

const authVerify = require('./auth.middleware');
const doctorverify = require('./doctor.middleware');
const hospitalVerify = require('./hospital.middleware');
const jwtVerify = require('./authJwt.middleware');
const appointVerify = require('./appointment.middleware');
const presciptionVerify = require('./presciption.middleware');

module.exports = {
    authVerify,
    doctorverify,
    hospitalVerify,
    jwtVerify,
    appointVerify,
    presciptionVerify
}