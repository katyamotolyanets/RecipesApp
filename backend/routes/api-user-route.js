const express = require('express')
const router = express.Router()
const {check} = require('express-validator')

const User = require("../models/User");
const Recipe = require("../models/Recipe");
const Favorite = require("../models/Favorite");

const {
    getUsers,
    getUser,
    registration,
    login,
    auth,
} = require('../controllers/api-user-controller')
const authMiddleware = require('../middleware/auth.middleware')

User.belongsToMany(Recipe, {through: Favorite, foreignKey: "USERID"})

router.post('/api/registration', [
    check('USERNAME', 'Username must be not empty').notEmpty(),
    check('EMAIL', 'Email must be not empty').notEmpty(),
    check('PASSWORD', 'Password must be not empty').isLength({min: 4, max: 10})
], registration);
router.post('/api/login', [
    check('EMAIL', 'Email must be not empty').notEmpty(),
    check('PASSWORD', 'Password must be not empty').isLength({min: 4, max: 10})
], login);
router.get('/api/auth', authMiddleware, auth)
router.get('/api/users', getUsers);
router.get('/api/users/:id', getUser);

module.exports = router