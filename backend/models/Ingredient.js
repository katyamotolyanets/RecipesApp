const Sequelize = require('sequelize-oracle')
const db = require('../db-connection')
const RecipeIngredient = require("./RecipeIngredient");
const Recipe = require("./Recipe");

const Ingredient = db.define('ingredient', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    NAME: {
        type: Sequelize.STRING(75),
        allowNull: false,
        unique: true
    }},
    {
        timestamps: false,
        tableName: 'INGREDIENTS',
        freezeTableName: true
    })

module.exports = Ingredient;




