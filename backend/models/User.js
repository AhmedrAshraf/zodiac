const crypto = require('crypto');
const { promisify } = require('util');
const supabase = require('../config/supabase');
const model = require('./model');

const scrypt = promisify(crypto.scrypt);
const hashPassword = async (password, salt) => (await scrypt(password, salt, 64)).toString('hex');

// hash and salt are deliberately left out so they are never returned to the client
const User = model('users', {
  _id: 'id',
  email: 'email',
  name: 'name',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

// register/authenticate replace passport-local-mongoose: passwords are stored as a scrypt hash + salt
User.register = async ({ email, name }, password) => {
  if (!email || !password) throw new Error('Email and password are required');
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = await hashPassword(password, salt);
  const { data } = await supabase
    .from('users')
    .insert({ email, name, hash, salt })
    .select(User.columns)
    .single()
    .throwOnError();
  return data;
};

User.authenticate = async (email, password) => {
  const { data: user } = await supabase
    .from('users')
    .select(`${User.columns},hash,salt`)
    .eq('email', email)
    .maybeSingle()
    .throwOnError();
  if (!user) return false;

  const { hash, salt, ...publicUser } = user;
  const candidate = Buffer.from(await hashPassword(password, salt), 'hex');
  return crypto.timingSafeEqual(candidate, Buffer.from(hash, 'hex')) ? publicUser : false;
};

module.exports = User;
