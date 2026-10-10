const model = require('./model');

module.exports = model('clothing', {
  _id: 'id',
  type: 'type',
  color: 'color',
  userId: 'user_id',
  collabId: 'collab_id'
});
