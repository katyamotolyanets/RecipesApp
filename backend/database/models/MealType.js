const Sequelize = require('sequelize-oracle')
const db = require('../libs/connection')

const MealType = db.define('mealType', {
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


