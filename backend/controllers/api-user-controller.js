require('dotenv').config();
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

const User = require("../models/User");
const Recipe = require("../models/Recipe");

const {JWT_ACCESS_SECRET_KEY} = process.env

const getUsers = (req, res) => {
    User.findAll().then(response => {
        res.status(200).json(response)
    })
}

const getUser = (req, res) => {
    User
        .findOne({
            where: {
                ID: req.params.id,
            },
            include: {
                model: Recipe,
                attributes: ['ID', 'TITLE', 'IMAGE', 'TIMEOFCOOKING'],
                through: {
                    attributes: []
                }
            }
        })
        .then(user => {
            if (user !== null) {
                res.status(200).json(user)
                res.end()
            }
        })
        .catch(() => {
            res.status(404).json({message: 'Can not find user with that id :('})
            res.end()
        })
}

const registration = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: 'Registration error'})
        }
        const {USERNAME, EMAIL, PASSWORD} = req.body
        const candidate = await User.findOne({
            where: {
                EMAIL: EMAIL,
            }
        })
        if (candidate) {
            return res.status(404).json({message: 'User with that email already exist'})
        } else {
            const hashPassword = bcrypt.hashSync(PASSWORD.toString(), 3)
            const user = await User.create({USERNAME, EMAIL, PASSWORD: hashPassword})
            await user.save()
            return res.status(200).json({message: 'User has been registered!'})
        }
    } catch (error) {
        res.status(404).json({message: 'Can not register user!'})
    }
}

const login = async (req, res) => {
    try {
        const {EMAIL, PASSWORD} = req.body
        const user = await User.findOne({
            where: {
                EMAIL: EMAIL,
            }
        })
        if (!user) {
            res.status(400).json({message: 'User not found'})
        }
        const isValidPassword = bcrypt.compareSync(PASSWORD, user.PASSWORD)
        if (!isValidPassword) {
            res.status(400).json({message: 'Invalid password'})
        }
        const token = jwt.sign({ID: user.ID}, JWT_ACCESS_SECRET_KEY, {expiresIn: "24h"})
        return res.json({token, user: {
                id: user.ID,
                username: user.USERNAME,
                email: user.EMAIL,
            }})
    } catch (error) {
        res.status(400).json({message: 'Login error'})
    }
}

const auth = async (req, res) => {
    const user = await User.findOne({_ID: req.user.ID})
    const token = jwt.sign({ID: user.ID}, JWT_ACCESS_SECRET_KEY, {expiresIn: '24h'})
    return res.json({token, user: {
            ID: user.ID,
            USERNAME: user.USERNAME,
            EMAIL: user.EMAIL,
        }})
}

module.exports = {
    getUsers,
    getUser,
    registration,
    login,
    auth,
}