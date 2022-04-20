const Sequelize = require('sequelize-oracle')
const db = require('../db-connection')
const Diet = require("./Diet");
const User = require("./User");
const MealType = require("./MealType");
const RecipeIngredient = require("./RecipeIngredient");

const Recipe = db.define('RECIPES', {
        ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        TITLE: {
            type: Sequelize.STRING(256),
            allowNull: false,
        },
        TIMEOFCOOKING: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        DESCRIPTION: {
            type: Sequelize.STRING(1024),
            allowNull: false,
        },
        DIRECTIONS: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        IMAGE: {
            type: Sequelize.STRING(350),
            allowNull: false,
            /*        validate: {
                        notEmpty: true
                    }*/
        },
        MEALTYPEID: {
            type: Sequelize.STRING(350),
            allowNull: false,
            references: {
                model: MealType,
                key: "id"
            }
        },
        DIETID: {
            type: Sequelize.INTEGER,
            references: {
                model: Diet,
                key: "id"
            }
        },
        AUTHORID: {
            type: Sequelize.INTEGER,
            references: {
                model: User,
                key: "id"
            }
        },
        CALORIES: {
            type: Sequelize.INTEGER
        }},
    {
        timestamps: false,
        tableName: 'RECIPES',
        freezeTableName: true
    })

/*Recipe.associate = function() {
    Recipe.hasMany(Ingredient, {through: RecipeIngredient})
};*/

module.exports = Recipe;


