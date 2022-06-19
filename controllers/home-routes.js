const { application } = require('express');

const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        let homeLog = await User.findAll({
        });
        // console.log(homeLog)
        // homeLog = homeLog.get({ plain: true }); will break server gotta redo
        res.render('home', {homeLog});
    } catch(error) {
        res.status(404).send("Almost there!")
    }
});

module.exports = router;