import './css/Update.css'
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Update = (props) =>{
  const {data} = props
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    _id : data._id,
    post_name : data.post_name,
    taken_year : data.taken_year,
    rating : data.rating,
    camera : data.camera,
    img_url : data.img_url,
    description : data.description
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

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.put(`http://localhost:4004/api/posts/${data._id}`,postData)
    .then((resp)=>{
      navigate('/');
      window.location.reload(false);
      console.log('Update Successful', resp);
    }).catch((error)=>console.log(error));
  }

  return(
    <form className='update_view' onSubmit={handleSubmit}>
      <img src={data.img_url} alt={`${data.post_name}`} /><br/>
      <input type='text' name='post_name' defaultValue={data.post_name} onChange={handleChange}/>
      <p>Taken : </p>
      <input type='number' name='taken_year' defaultValue={data.taken_year} onChange={handleChange}/>
      <h3>Rating : </h3>
      <input type='number' name='rating' defaultValue={data.rating} onChange={handleChange}/>
      <h3>Camera model : </h3>
      <input type='text' name='camera' defaultValue={data.camera} onChange={handleChange}/><br />
      <input type='text-field' name='description' defaultValue={data.description} onChange={handleChange}/><br />
      <button className='comfirm_update'>Confirm</button>
    </form>
  )
}

export default Update;