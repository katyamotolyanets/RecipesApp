const Sequelize = require('sequelize-oracle')
const db = require('../db-connection')
const MealType = require("./MealType");
const Diet = require("./Diet");
const User = require("./User");

const Recipe = db.define('recipe', {
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
            allowNull: false
        },
        MEALTYPEID: {
            type: Sequelize.STRING(350),
            allowNull: false,
            references: {
                model: MealType,
                key: "ID"
            }
        },
        DIETID: {
            type: Sequelize.INTEGER,
            references: {
                model: Diet,
                key: "ID"
            }
        },
        AUTHORID: {
            type: Sequelize.INTEGER,
            references: {
                model: User,
                key: "ID"
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

module.exports = Recipe;