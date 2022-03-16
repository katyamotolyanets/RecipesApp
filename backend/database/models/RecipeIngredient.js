const Sequelize = require('sequelize-oracle')
const db = require('../libs/connection')
const Recipe = require("./Recipe");
const Ingredient = require("./Ingredient");

const RecipeIngredient = db.define('recipeIngredient', {
        ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        RECIPEID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Recipe,
                key: "id"
            }
        },
        INGREDIENTID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Ingredient,
                key: "id"
            }
        },
        QUANTITYOFINGREDIENT: {
            type: Sequelize.STRING(30),
            allowNull: false,
        }},
    {
        timestamps: false,
        tableName: 'RECIPEINGREDIENTS',
        freezeTableName: true
    })



module.exports = RecipeIngredient;


