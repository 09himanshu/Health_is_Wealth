// This file contail the hospital schema

module.exports = (sequelize,Sequelize) => {
    const Hospital = sequelize.define('hospital', {
        hospitalName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        zipcode: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return Hospital;
}