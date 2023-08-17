const PORT = 4004;
const express = require('express');
const cors = require('cors');
const app = express();
const db = require ('./mongodb');
app.use(cors());
app.use(express.json());

app.get('/api/posts', (req,res)=>{
  db.getAllPosts()
  .then((response)=>res.status(200).json(response))
  .catch((error)=>res.status(500).send(error))
})

app.get('/api/posts/:id',(req,res)=>{
  const theOne = req.params.id
  db.getSinglePost(theOne)
  .then((response)=>{
    if(!response){
      res.status(404).json({error : 'not found'})
    } else {
      res.status(200).json({message : 'found'})
    }
  }).catch((error)=>console.log(error))
})

app.post('/api/posts', (req,res)=>{
  const postData = req.body;
  db.addPost(postData)
  .then((response)=>res.status(200).json(response))
  .catch((error)=>res.status(500).send(error))
})

app.delete('/api/posts/:id',(req,res)=>{
  const toDelete = req.params.id;
  db.deletePost(toDelete)
  .then((response)=>{
    response ? res.status(200).json({message : 'Post Deleted!'}) : res.status(404).json({error: 'Post not found'})
  }).catch((error)=>res.status(500).send(error))
})

app.put('/api/posts/:id', (req,res)=>{
  const toUpdate = req.params.id;
  const theUpdate = req.body;
  db.updatePost(toUpdate,theUpdate)
  .then((response)=>{
    response ? res.status(200).json(response) : res.status(404).json({error : 'Post not found'})
  }).catch((error)=>res.status(500).send(error))
})

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})