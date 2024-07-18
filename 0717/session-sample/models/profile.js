const { DataTypes } = require('sequelize');

const profile = (seq) => {
    return seq.define('profile', {
        userName: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
            },
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        
    });
};

module.exports = profile;