/**
 * In this file user schema is defined
 */

module.exports = (sequelize,Sequelize) => {
    const DataType = Sequelize.DataType;
    const User = sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    return User;
}