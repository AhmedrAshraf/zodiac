

require('dotenv').config();
const Clothing = require('../models/Clothing')

console.log('Connecting DB to ', process.env.SUPABASE_URL)

  const leads = [{
      type: 'shirt',
      color: 'blue'
  },

{
    type: 'shirt',
    color: 'red'
},

{
    type: 'shirt',
    color: 'green'
}
]
Clothing.insertMany(leads).then(res => {
    console.log(res)
}).catch(err => console.error('Error seeding', err))
