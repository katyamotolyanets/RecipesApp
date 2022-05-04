const Sequelize = require('sequelize-oracle')
const db = require('../db-connection')

const User = db.define('user', {
        ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        USERNAME: {
          type: Sequelize.STRING(25),
          allowNull: false,
          unique: true
        },
        EMAIL: {
            type: Sequelize.STRING(320),
            allowNull: false,
            unique: true
        },
        PASSWORD: {
            type: Sequelize.STRING(256),
            allowNull: false,
        }},
    {
        timestamps: false,
        tableName: 'USERS',
        freezeTableName: true
    })

module.exports = User;


