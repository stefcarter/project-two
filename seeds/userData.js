const { User } = require('../models');

const fillData = [
    {
      "username": "Adam",
      "email": "adam@gmail.com",
      "password": "password12345"
    },
    {
      "username": "Gordon",
      "email": "gordon@gmail.com",
      "password": "password12345"
    },
    {
      "username": "Leelai",
      "email": "leelai@gmail.com",
      "password": "password12345"
    },
    {
      "username": "Steffan",
      "email": "steffan@gmail.com",
      "password": "password12345"
    },
    {
      "username": "Curtis",
      "email": "curtis@gmail.com",
      "password": "password12345"
    }
  ]
  
  const seedFill = () => User.bulkCreate(fillData);

  module.exports = seedFill;