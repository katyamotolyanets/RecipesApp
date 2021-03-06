const Sequelize = require('sequelize-oracle')
const db = require('../db-connection')
const User = require("./User");
const UserDiet = require("./UserDiet");

const Diet = db.define('diet', {
        ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        NAME: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true
        }},
    {
        timestamps: false,
        tableName: 'DIETS',
        freezeTableName: true
    })

Diet.belongsToMany(User, { through: UserDiet });

module.exports = Diet;


