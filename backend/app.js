require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const cookieSession = require('cookie-session');
const supabase = require('./config/supabase');
const passport = require('./config/passport');


console.log('Connecting DB to ', process.env.SUPABASE_URL)

supabase
  .from('users')
  .select('id', { count: 'exact', head: true })
  .then(({ error }) =>
    error
      ? console.error('Error connecting to Supabase (did you run backend/supabase/schema.sql?)', error)
      : console.log('Connected to Supabase!')
  );

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://naughty-davinci-abed69.netlify.app"] //Swap this with the client url 
  })
);


// app.use(cors({
//   origin: function(origin, callback){
//     return callback(null, true);
//   },
//   optionsSuccessStatus: 200,
//   credentials: true
// }));

// On Vercel the backend runs as serverless functions, so the login session is kept in a
// signed cookie instead of server memory. SESSION_SECRET signs it and must be set in production.
const isProduction = process.env.NODE_ENV === 'production' || !!process.env.VERCEL;
if (isProduction && !process.env.SESSION_SECRET) {
  throw new Error('Set the SESSION_SECRET environment variable');
}

app.set('trust proxy', 1); // Vercel/Heroku terminate HTTPS in front of the app
app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'secret'],
    maxAge: 1000 * 60 * 60,
    sameSite: 'lax',
    secure: isProduction
  })
);

// passport 0.6+ calls these express-session methods; cookie-session saves automatically
app.use((req, res, next) => {
  if (req.session && !req.session.regenerate) req.session.regenerate = (cb) => cb();
  if (req.session && !req.session.save) req.session.save = (cb) => cb();
  next();
});

app.use(passport.initialize());
app.use(passport.session());

//app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

const index = require('./routes/index');
const auth = require('./routes/auth');
const clothing = require('./routes/clothing');


// Everything lives under /api: Vercel routes /api/* to this backend (see vercel.json)
// and the Vite dev server proxies /api to it locally
app.use('/api', require('./routes/imageRoute'));
app.use('/api', index);
app.use('/api', auth);
app.use('/api', clothing);



// Uncomment this line for production
let client = path.join(__dirname + '../public/index.html')
console.log('client',client)
//app.get('*', (req, res) => res.sendFile(client));
// For any other routes, redirect to the index.html file of React
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
// })

// Moved here from bin/www so they also apply on Vercel, which loads this file directly
app.use((req, res, next) => {
  res.status(404).json({ msg: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);
  if (!res.headersSent) {
    res.status(500).send({ msg: 'Check the error on console' });
  }
});

module.exports = app;
