// This file will contain presciption detail

module.exports = (sequelize, Sequelize) => {
    const Presciption = sequelize.define('presciption', {
        presciptionName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        date: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return Presciption;
}