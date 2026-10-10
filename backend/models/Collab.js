const model = require('./model');

module.exports = model('collabs', {
  _id: 'id',
  userId: 'user_id',
  Artist: 'artist',
  Bio: 'bio',
  Design: 'design',
  Imageurl: 'image_url',
  Info: 'info',
  Insta: 'insta',
  Twitter: 'twitter',
  Youtube: 'youtube',
  Live: 'live',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});
