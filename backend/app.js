require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
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

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "secret",
    cookie: { maxAge: 1000 * 60 * 60 }
  })
);

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


app.use('/api', require('./routes/imageRoute'));
app.use('/', index);
app.use('/', auth);
app.use('/', clothing);



// Uncomment this line for production
let client = path.join(__dirname + '../public/index.html')
console.log('client',client)
//app.get('*', (req, res) => res.sendFile(client));
// For any other routes, redirect to the index.html file of React
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
// })
module.exports = app;
