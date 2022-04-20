const express = require('express')
const router = express.Router()

const Diet = require("../models/Diet");
const User = require("../models/User");
const UserDiet = require("../models/UserDiet");

const {
    getDiets,
    getDiet
} = require('../controllers/api-diet-controller')

Diet.belongsToMany(User, { through: UserDiet });
User.belongsToMany(Diet, { through: UserDiet });

router.get('/api/diets', getDiets);
router.get('/api/diets/:id', getDiet);

module.exports = router