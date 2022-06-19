const sequelize = require('../config/connections');
const seedFill = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFill();

  process.exit(0);
};

seedAll();
