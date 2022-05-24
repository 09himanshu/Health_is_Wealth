/**
 * In this file doctor model is define
 */

module.exports = (sequelize,Sequelize) => {
    const Doctor = sequelize.define('doctor', {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return Doctor;
}