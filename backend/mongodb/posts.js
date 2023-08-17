const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;

const fotopholio_schema = new mongoose.Schema({
  post_name : String,
  taken_year : Number,
  rating : Number,
  camera : String,
  img_url : String,
  description : String
})

const posts = mongoose.model('posts',fotopholio_schema);

module.exports = posts;