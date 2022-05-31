// This file will have schema

module.exports = (sequelize, Sequelize) => {
    const Sympton = sequelize.define('sympton', {
        symptomName: {
            type:  Sequelize.STRING,
            allowNull: false,
        },
        symptomType: {
            type:  Sequelize.STRING,
            allowNull: false,
        },
        testDate: {
            type:  Sequelize.STRING,
            allowNull: false,
        },
        testTime: {
            type:  Sequelize.STRING,
            allowNull: false,
        }
    });
    return Sympton;
}