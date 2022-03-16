const express = require('express')
const router = express.Router()
const User = require("../database/models/User");

router.get('/', (req, res) =>
    User.findAll()
        .then(users => {
            console.log(users)
            res.sendStatus(200);
        })
        .catch(err => console.log(err)))

module.exports = router