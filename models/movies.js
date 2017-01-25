var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  // id is created automatically
  title: String,
  rank: String,
  rating: String,
  views: String,
  notes: [{
    postedDate: {
      type: Date,
      'default': Date.now
    },
    note: String
  }]
});

module.exports = mongoose.model('Movie', movieSchema);