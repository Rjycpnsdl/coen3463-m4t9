var express = require('express');
var router = express.Router();
var moment = require('moment');
var Movie = require('../models/movies');

router.use(function(req, res, next) {
  if (!req.user) {
    res.redirect('/auth/login')
  }
  next();
});

router.get('/', function(req, res) {
  Movie.find( function(err, movies, count) {
    res.render('list', {movies: movies});
  })
});

router.post('/', function(req, res) {
    new Movie({
      title: req.body.title,
      rank: req.body.rank,
      rating: req.body.rating,
      views: req.body.views
    }).save(function(err, movie, count) {
      if(err) {
        res.status(400).send('Error saving new movie: ' + err);
      } else {
        res.send('Success, please go back to movie list')
      }
    })
});

router.get('/add', function(req, res) {
  res.render('add', {movie: {}});
});

router.route('/:movie_id')
  .all(function(req, res, next) {
    movie_id = req.params.movie_id;
    movie = {};
    Movie.findById(movie_id, function(err, c) {
      movie = c;
      next();
    });
  })

  .get(function(req, res) {
    res.render('edit', {movie: movie, moment: moment});
  })

  .post(function(req, res) {
    movie.notes.push({
      note: req.body.notes
    });

    // movie.save(function(err, movie, count) {
    //   if(err) {
    //     res.status(400).send('Error adding note: ' + err);
    //   } else {
    //     res.send('Note added!');
    //   }
    // });
  })

  .put(function(req, res) {
    movie.title = req.body.title;
    movie.rank = req.body.rank;
    movie.rating = req.body.rating;
    movie.views = req.body.views;

    movie.save(function(err, movie, count) {
      if(err) {
        res.status(400).send('Error saving movie: ' + err);
      } else {
        res.send('Movie saved');
      }
    });
  })

  .delete(function(req, res) {
    movie.remove(function(err, movie) {
      if(err) {
        res.status(400).send("Error removing movie: " + err);
      } else {
        res.send('Movie removed');
      }
    });
  });

module.exports = router;
