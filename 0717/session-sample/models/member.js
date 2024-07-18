const { DataTypes } = require('sequelize');

const member = (seq) => {

    return seq.define('member', {
        userId: {
            type: DataTypes.STRING(31),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
    });
};

module.exports = member;
 // memberId:{
        //     type: DataTypes.INTEGER,
        //     references:{
        //         model: 'members',
        //         key:'id',
        //     },
        //     onDelete: 'CASCADE'
        // } 이렇게 써도 되지만 
        // hasOne, belongsTo 의 외래키에는 
        // 자동생성방식일때와 동일하게 작성해야함.