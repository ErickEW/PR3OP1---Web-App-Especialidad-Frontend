const {Sequelize, DataTypes} = require('sequelize');
const Model = Sequelize.Model;
const {sequelize} = require('./../config/db');

class Post extends Model {};

Post.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },


    contnent: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'post',
});

module.exports = {Post};