// 

module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('role', {
        name: {
            type: Sequelize.STRING,
        }
    });
    return Role;
}