/**
 * Main server file
 */

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config/server.config');
const db = require('./models');

const app = express();
app.use(morgan('common'));
app.use(bodyParser.json());

// database connection
db.sequelize.sync({force: true}).then(() => {
    console.log(`Database connected`);
    init();
}).catch(err => {
    console.log(`Error occur at database connection ${err}`);
});
let Role = db.role;

function init() {
    Role.create({
        id:1,
        name: "customer"
    });

    Role.create({
        id:2,
        name: "admin"
    });
}

// Routes
require('./routes/auth.routes')(app);
require('./routes/doctor.routes')(app);
require('./routes/hospital.routes')(app);
require('./routes/appoint.routes')(app);
require('./routes/presciption.routes')(app);
require('./routes/trackRecord.routes')(app);
require('./routes/symptom.routes')(app);

// app listen
app.listen(config.port, () => {
    console.log(`Server is connected on port ${config.port}`);
})
