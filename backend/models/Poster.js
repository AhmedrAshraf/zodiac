const model = require('./model');

module.exports = model('posters', {
  _id: 'id',
  type: 'type',
  Size: 'size',
  userId: 'user_id',
  collabId: 'collab_id'
});
