const Sequelize = require('sequelize-oracle')
const db = require('../libs/connection')

const Ingredient = db.define('INGREDIENTS', {
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




