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
}).catch(err => {
    console.log(`Error occur at database connection ${err}`);
});


// Routes
require('./routes/auth.routes')(app);
require('./routes/doctor.routes')(app);
require('./routes/hospital.routes')(app);

// app listen
app.listen(config.port, () => {
    console.log(`Server is connected on port ${config.port}`);
})