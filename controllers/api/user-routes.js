const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email} });
        if (!userData) {
            res.status(404).json({ message: 'Epic failure. Please recast your fate!' });
            return;
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            userData.password
        );
        if (!validPassword) {
            req.status(400).json({ message: 'Thine riddles have no standing here! Try again mortal.'});
            return;
        }
        res.status(200).json({ message: 'You have made it past the bridge troll!' });
    } catch (err) {
        res.status(500).json({ message: 'No one here but us chickens.'});
    }
});

module.exports = router;