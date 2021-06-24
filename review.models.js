const {Sequelize, DataTypes} = require('sequelize');
const Model = Sequelize.Model;
const {sequelize} = require('./../config/db');

class Review extends Model {};

Review.init({
    username: {
        type: DataTypes.STRING,
    },
    contentReview: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'review',
});

module.exports = {Review};