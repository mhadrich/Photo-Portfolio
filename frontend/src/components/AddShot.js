import axios from 'axios';
import './css/Add.css'
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddShot = () =>{
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    post_name : '',
    taken_year : '',
    rating : '',
    camera : '',
    img_url : '',
    description : ''
  })
  
  const handleChange = (input) =>{
    const {name, value} = input.target;
    setPostData((prevData)=>(
      {
        ...prevData,
        [name] : value
      }
    ))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4004/api/posts/',postData)
    .then((response)=>{
      navigate('/');
      window.location.reload(false);
      console.log('Successful add',response.data);
    })
    .catch((error)=>console.log('Failed to add',error))
  }

  return (
    <div className='addEdit'>
      <h1>Welcome back, let's start adding art</h1>
      <form onSubmit={handleSubmit}>
        <input className='input' name='post_name' value={postData.post_name} placeholder='Pic name' onChange={handleChange}/><br /><br />
        <input className='input' name='taken_year' value={postData.taken_year} placeholder='Year' onChange={handleChange}/><br /><br />
        <input className='input' name='rating' value={postData.rating} placeholder='500px Rating'onChange={handleChange}/><br /><br />
        <input className='input' name='camera' value={postData.camera} placeholder='Camera used' onChange={handleChange}/><br /><br />
        <input className='input' name='img_url' value={postData.img_url} placeholder='500px image link' onChange={handleChange}/><br /><br />
        <input className='input' name='description' value={postData.description} placeholder='Description' onChange={handleChange}/><br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddShot;