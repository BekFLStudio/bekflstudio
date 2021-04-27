const express = require('express');
const router = express.Router();
const Users = require('../Model/Users');
const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res, next) {

  const {username, password} = req.body;

  // const user = new Users({
  //   username,
  //   password,
  // })

  bcrypt.hash(password, 10, (err, hash) => {
    const user = new Users({
      username,
      password: hash
    })
    
  })

const promise = user.save();
promise.then(data => res.json(data))
.catch(err => console.log(err));

})

module.exports = router;

