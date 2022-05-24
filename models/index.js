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

module.exports = db;