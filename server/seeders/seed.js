const db = require('../config/connection');
const { Profile, Post } = require('../models');
const profileSeeds = require('./profileSeeds.json');
// const commentSeeds = require('./commentSeeds.json')
const postSeeds = require('./postSeeds.json')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Profile', 'profiles');
    
    await Profile.create(profileSeeds);
    await Post.create(postSeeds)

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
