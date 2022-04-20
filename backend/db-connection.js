const Sequelize = require('sequelize-oracle')

const PORT = process.env.PORT_FOR_DB || 1521
const PASSWORD = process.env.PASSWORD
const USER_DB = process.env.USER_DB
const HOST = process.env.HOST

module.exports = new Sequelize('orcl', USER_DB, PASSWORD,{
    database: 'orcl',
    username: USER_DB,
    password: PASSWORD,
    host: HOST,
    port: PORT,
    dialectOptions: {
        connectTimeout: 6000
    },
    pool: {
        maxConnections: 5,
        maxIdleTime: 3000
    },
    dialect: 'oracle',
    logging: false
});
