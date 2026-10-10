const router = require('express').Router();
const Collab = require('../models/Collab')
const Poster = require ('../models/Poster')

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.post('/savenewCollab',isAuth,(req, res, next) => {
  let Collabart = req.body
  console.log(req.body,"hi")
  Collabart.userId= req.user._id
  Collab.create(Collabart).then(col=> {
    res.json(col)
  }).catch(next)
})
router.get('/getMycollabs',isAuth,(req, res, next) => {
  // chang query to find by sharetrue
  console.log('collab')
    Collab.find({userId:req.user._id}).then(collabs => {
      res.json({collabs})
    }).catch(next)

})
router.get('/getallcollabs',(req, res, next) => {
  // chang query to find by sharetrue
  console.log('allcollab')
    Collab.find({Live:true}).then(collabs => {
      console.log(collabs)
      res.json({collabs})
    }).catch(next)

})
router.get('/Amaken',isAuth,(req, res, next) => {
  console.log()
  Collab.find({userId:req.user._id}).then(collabs => {
    res.json({collabs})
  }).catch(next)


})
router.post('/shift',isAuth,(req, res, next) => {
  console.log(req.body)
  Collab.findByIdAndUpdate(req.body.id,{
    Live : true
  }).then(collabs => {
    res.json({collabs})
  }).catch(next)


})
router.post('/unshift',isAuth,(req, res, next) => {
  console.log(req.body  )
  Collab.findByIdAndUpdate(req.body.id,{
    Live : false
  }).then(collabs => {
    res.json({collabs})
  }).catch(next)
})

router.get('/getPoster', (req, res, next) => {
    console.log("awesome")
    Poster.find().then(data => {
        res.json(data)
    }).catch(next)
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}
module.exports = router;
