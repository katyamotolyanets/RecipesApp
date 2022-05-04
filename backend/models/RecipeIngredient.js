const Sequelize = require('sequelize-oracle')
const db = require('../db-connection')
const Recipe = require("./Recipe");
const Ingredient = require("./Ingredient");

const RecipeIngredient = db.define('recipe_ingredient', {
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
                key: "ID"
            }
        },
        INGREDIENTID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Ingredient,
                key: "ID"
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


