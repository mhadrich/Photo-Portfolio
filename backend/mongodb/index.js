const mongoose = require('mongoose');
const posts = require('./posts')
const mongoURI = 'mongodb://localhost:27017/photofolio';
mongoose.connect(mongoURI,{ useUnifiedTopology: true, useNewUrlParser: true }).then(()=>console.log('mongodb connected')).catch((err)=>console.log(err));
const db = mongoose.connection;

// GET ALL
const getAllPosts = () =>{
  return posts.find()
}

// GET SINGLE POST
const getSinglePost = (postId) =>{
  return posts.findById(postId);
}

// ADD POST
const addPost = (postData) =>{
  const newPost = new posts(postData);
  return newPost.save();
}

// DELETE POST
const deletePost = (postId) =>{
  return posts.findByIdAndDelete(postId);
}

// UPDATE POST
const updatePost = (postId, updatedPost) =>{
  return posts.findByIdAndUpdate(postId,updatedPost, {new: true});
}

module.exports = {
  getAllPosts,
  getSinglePost,
  addPost,
  deletePost,
  updatePost,
  db
}