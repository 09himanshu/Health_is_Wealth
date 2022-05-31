const Sequelize = require('sequelize');
const config = require('../config/server.config');

const sequelize = new Sequelize(config.db, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require('./user.model')(sequelize,Sequelize);
db.doctor = require('./doctors.model')(sequelize,Sequelize);
db.hospital = require('./hospital.model')(sequelize,Sequelize);
db.appoint = require('./appointment.model')(sequelize, Sequelize);
db.presciption = require('./presciption.model')(sequelize,Sequelize);
db.trackRecord = require('./trackRecord.model')(sequelize,Sequelize);
db.symptom = require('./symptom.model')(sequelize,Sequelize);

// Relationship between hospital and doctor
db.hospital.hasMany(db.doctor);

// Relationship between doctor and hospital
db.doctor.hasMany(db.presciption);

// Relationship between trackRecord and user
db.user.hasOne(db.trackRecord);


module.exports = db;