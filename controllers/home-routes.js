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

// router.get('/login', async (req, res) => {
//     try {
//         let loginPage = await User.findAll({
//         });
//         res.render('login', {loginPage});
//     } catch(error) {
//         res.status(404).send("Almost there!")
//     }
// });

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