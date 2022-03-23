const router = require('express').Router();
const res = require('express/lib/response');
const Post = require('../models/Post');


// get clients
router.get('/clients', (req, res) =>
  Post.findAll()
    .then(posts => {
      console.log(posts);
    })
    .catch(err => console.log(err)));


// add client form
router.get('/clients/add', (req, res) => res.render('add'));


// add client
router.post('/add', (req, res) => {
  let { title, address, phone_num, description, email } = req.body;
})


// insert into table
// Post.create({
//   title,
//   address,
//   phone_num,
//   description,
//   email
// })
//   .then(posts => res.redirect('/clients'))
//   .catch(err => res.render('error'))



router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;