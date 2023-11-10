const db = require('../config/connection');
const { Profile, Post } = require('../models');
const profileSeeds = require('./profileSeeds.json');
// const commentSeeds = require('./commentSeeds.json')
const postSeeds = require('./postSeeds.json')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Profile', 'profiles');
    await cleanDB('Post', 'posts');

//thanks josh    
    const profiles = await Profile.create(profileSeeds);
    for(const post of postSeeds) {
      const randomIndex = Math.floor(Math.random()*profiles.length)
      const profile = profiles[randomIndex]
      const newPost = await Post.create({...post, username:profile.username})
      await Profile.findByIdAndUpdate(profile._id, {$push:{posts:newPost._id}})
    }
    

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
