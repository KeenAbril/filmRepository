const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  title: String,
  sinopsis: String,
  director: String,
  releasedDate: Date,
  actors: Array,
});

module.exports = mongoose.model('Film', filmSchema);


// module.exports = mongoose.model('Film', mongoose.Schema({
//   mail: String
// }));