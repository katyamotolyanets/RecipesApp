const Sequelize = require('sequelize-oracle')
const db = require('../db-connection')
const User = require("./User");
const Recipe = require("./Recipe");

const Favorite = db.define('favorite', {
        ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        USERID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        },
        RECIPEID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Recipe,
                key: "id"
            }
        }},
    {
        timestamps: false,
        tableName: 'FAVORITES',
        freezeTableName: true
    })

module.exports = Favorite;


