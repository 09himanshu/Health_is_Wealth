// This file contain all appointment schema

module.exports = (sequelize,Sequelize) => {
    const Appointment = sequelize.define('appointment', {
        userId: {
            type: Sequelize.INTEGER,
            alloNull: false,
        },
        doctorId: {
            type: Sequelize.INTEGER,
            alloNull: false,
        },
        date: {
            type: Sequelize.STRING,
        },
        time: {
            type: Sequelize.STRING,
        }
    });
    return Appointment;
}