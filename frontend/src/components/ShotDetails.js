import './css/ShotDetails.css'
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShotDetails = (props) =>{
  const {data} = props;
  const navigate = useNavigate();
  const deletePost = () =>{
    axios.delete(`http://localhost:4004/api/posts/${data._id}`)
    .then((resp)=>{
      navigate('/');
      window.location.reload(false);
      console.log('Post Deleted', resp);
    }).catch((error)=>console.log(error));
  }

  return(
    <div className='detailed_view'>
      <img src={data.img_url} alt={`${data.post_name}`} onClick={()=>navigate('/')} />
      <h1>{data.post_name}</h1>
      <p>Taken : {data.taken_year}</p>
      <h3>Rating : {data.rating}</h3>
      <h3>Camera model : {data.camera}</h3>
      <p>{data.description}</p>
      <button className='update_btn' onClick={()=>navigate(`/Update/${data._id}`)}>Update</button>
      <button className='delete_btn' onClick={deletePost}>Delete</button>
    </div>
  )
}

export default ShotDetails;