
const controller = require('../controllers/symptom.controller');

module.exports = (app) => {

    app.post('/health/api/v1/symptoms', controller.create);

    app.get('/health/api/v1/symptoms', controller.findAll);

    app.put('/health/api/v1/symptoms/:id', controller.update);

    app.delete('/health/api/v1/symptoms/:id', controller.delete);
}