const Sequelize = require('sequelize-oracle')
const db = require('../libs/connection')
const User = require("./User");
const Diet = require("./Diet");

const UserDiet = db.define('userDiet', {
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
        DIETID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Diet,
                key: "id"
            }

        }},
    {
        timestamps: false,
        tableName: 'USERSDIETS',
        freezeTableName: true
    })

module.exports = UserDiet;


