// This file will contain trackRecord schema

module.exports = (sequelize, Sequelize) => {
    const datatype = Sequelize.DataTypes;
    const TrackRecord = sequelize.define('trackRecord', {
        visitPurpose: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        height: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        weight: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        date: {
            type: datatype.DATE,
            defaultValue: Date.now
        }
    });
    return TrackRecord;
}