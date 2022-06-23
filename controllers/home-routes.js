const { application } = require('express');

const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        let homeLog = await User.findAll({
        });
        // console.log(homeLog)
        // homeLog = homeLog.get({ plain: true }); 
        res.render('login', {homeLog});
    } catch(error) {
        res.status(404).send("Almost there!")
    }
});

router.get('/home', async (req, res) => {
    try {
        let homePage = await User.findAll({
        });
        res.render('home', {homePage});
    } catch(error) {
        res.status(404).send("Almost there!")
    }
});

router.get('/user', async (req, res) => {
    try {
        let profilePage = await User.findAll({
        });
        res.render('user', { profilePage });
    } catch (error) {
        res.status(404).send("you're beat!!")
    }
});


module.exports = router;