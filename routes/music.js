const express = require('express');
const Music = require('../Model/Music');
const router = express.Router();


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('music page get method');
// });


router.post('/', function(req, res, next) {
    // const data = req.body;
    // res.json(data);

    //  console.log(data);

    // const {title, category, country, year, imdb_score} = req.body;

    // const music = new Music({
    //     title: title,
    //     category:category,
    //     country: country,
    //     year: year,
    //     imdb_score: imdb_score,
    // })

    const music = new Music(req.body);

    const promise = music.save(); 

    promise.then(data => { 
        res.json(data)
    }).catch(err => {
        console.log(err);  
    })
      
});

// GET List all movies. 

router.get('/', function(req, res, next) {
  
  const promise = Music.find({});

  promise.then(music => {
    res.json(music)
  }).catch(err => {
    console.log(err);
  })
});

// GET id orqali tutish
router.get('/:music_id', function(req, res, next) {
  
  const promise = Music.findById(req.params.music_id);

  promise.then(music => {
    res.json(music)
  }).catch(err => {
    console.log(err);
  })
});

// PUT update qilamiz id orqali

router.put('/:music_id', function(req, res, next) {
  
  const promise = Music.findByIdAndUpdate(req.params.music_id, req.body);

  promise.then(music => {
    res.json(music)
  }).catch(err => {
    console.log(err);
  })
});

// Delete

router.delete('/:music_id', function(req, res, next) {
  
  const promise = Music.findByIdAndRemove(req.params.music_id);

  promise.then(music => {
    res.json(music)
  }).catch(err => {
    console.log(err);
  })
});


// GET top 10 musicni chiqaramiz

router.get('/top/top10', function(req, res, next) {

  const promise = Music.find({}).limit(10).sort({imdb_score: -1})
 
  promise.then(music => {
    res.json(music)
  }).catch(err => {
    console.log(err);
  })
});

// GET :start_year/:end_year 

router.get('/betwen/:start_year/:end_year', (req, res, next) => {

  const {start_year, end_year } = req.params;
 
  // gte = greate then equal >= kotta yoki teng
  // lte = litte then equal <= kichik yoki teng

  const promise = Music.find({
    year: { "$gte" : parseInt(start_year), "$lte" : parseInt( end_year) }
  })
  
  promise.then(music => {
    res.json(music)
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;