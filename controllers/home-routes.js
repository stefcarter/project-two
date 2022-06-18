const { application } = require('express');

const router = require('express').Router();
// const { User } = require('../models');

router.get('/', async (req, res) => {
    res.render('./login', {title: 'Login page' });
});


router.get('/', (req, res) => {
    res.render('./main', {title: 'home page' });
});

module.exports = router;