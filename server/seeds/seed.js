const sequelize = require('../config/connection');
const { Scores, User } = require('../models');

const userData = require('./userData.json');
const scoreData = require('./scoresData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const scores = await Scores.bulkCreate(scoreData, { });
  
  process.exit(0);
};

seedDatabase();
