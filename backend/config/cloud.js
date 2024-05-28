const cloudinary = require('cloudinary')
const config =require('./config')

cloudinary.config({ 
    cloud_name: config.CLOUD_NAME, 
    api_key: config.CLOUD_KEY, 
    api_secret: config.CLOUD_KEY_SECRET 
  });

  module.exports= cloudinary;