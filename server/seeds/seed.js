const db = require('../config/connection');
const { User } = require('../models');

const userSeeds = require('./userSeeds.json'); 

db.once('open', async () => {
  await User.deleteMany({});

  const users = await User.create(userSeeds);

  console.log('Users seeded!');
  process.exit();
});