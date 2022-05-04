const Sequelize = require('sequelize-oracle')
const db = require('../db-connection')

const MealType = db.define('meal_type', {
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
        tableName: 'MEALTYPES',
        freezeTableName: true
    })

module.exports = MealType;


