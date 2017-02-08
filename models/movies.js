var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  // id is created automatically
  title: String,
  rank: String,
  rating: String,
  views: String,
  link: String,
  sypnosis: String,
  // dateCreated: [{
  //   postedDate: {
  //     type: Date,
  //     'default': Date.now
  //   },
  //   isDate: String
  // }]
});

module.exports = mongoose.model('Movie', movieSchema);