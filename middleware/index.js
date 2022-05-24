// this file collect all middleware file and distribute it as requirement

const authVerify = require('./auth.middleware');
const doctorverify = require('./doctor.middleware');

module.exports = {
    authVerify,
    doctorverify
}