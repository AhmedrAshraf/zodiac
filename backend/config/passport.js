const User = require('../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.authenticate(email, password).then((user) => done(null, user), done);
  })
);
passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user || false), done);
});

module.exports = passport;
