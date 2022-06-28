const router = require('express').Router();
// const res = require('express/lib/response');
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const session = require('express-session');

console.log(User);


// where the user logs in route
router.post('/login', async (req, res) => { 
  console.log('login api in user.js')  
  try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res.status(400).json({ message: 'Incorrect email or password' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'Logged in!' });
      });
  
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });


  // how the user logsout route
  router.post('/logout', (req, res) => {
    console.log('logout api in user.js')
    console.log(req.session)
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


  // where the user signs up route
  router.post('/signup', async (req, res) => {
    console.log(req.body, "signup api in user.js")
    try {
      console.log(req.body.email);
      const userData = await User.create({
        email: req.body.email,
        password: req.body.password
      });
      console.log('before save');
  
      req.session.save(() => {
        // req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log('catch at signup');
      console.log(err);
      res.status(400).json(err);
    }
  });


  module.exports = router;

  // router.post('/signup', async (req, res) => {
  //   console.log("we are here")  
  //   try {
  //       const userData = await User.create(req.body);
  //       console.log(req.body)
  //       req.session.save(() => {
  //         req.session.user_id = userData.id;
  //         req.session.logged_in = true;
    
  //         res.status(200).json(userData);
  //       });
  //     } catch (err) {
  //       res.status(400).json(err);
  //     }
  //   });
  
  
  // router.post('/login', async (req, res) => {
  //     try {
  //         const userData = await User.findOne({ where: { email: req.body.email} });
  //         if (!userData) {
  //             res.status(404).json({ message: 'Epic failure. Please recast your fate!' });
  //             return;
  //         }
  
  //         const validPassword = await bcrypt.compare(
  //             req.body.password,
  //             userData.password
  //         );
  //         if (!validPassword) {
  //             req.status(400).json({ message: 'Thine riddles have no standing here! Try again mortal.'});
  //             return;
  //         }
  //         res.status(200).json({ message: 'You have made it past the bridge troll!' });
  //     } catch (err) {
  //         res.status(500).json({ message: 'No one here but us chickens.'});
  //     }
  // });
  
  // module.exports = router;