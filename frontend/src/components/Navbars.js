import React from 'react';
import { Link } from 'react-router-dom';
import './css/Nav.css'

const Navbars = () => {


  return (
    <nav className='navigation'>
      {/* <Link to={'/'}>
        <a className='hidden' href='/'>ABOUT</a>
      </Link> */}
      <Link to={'/AddShot'}> 
        <a className='textLink' href='/AddShot'>ADD POST</a>
      </Link>
      <Link to={'/'}>
        <a href='/'><img className='nav_img' draggable="false" src='https://drscdn.500px.org/user_avatar/2509057/q%3D85_w%3D300_h%3D300/v2?webp=true&v=7&sig=63203c9a6230a15c68bbb47580391c55830688c636215ddaf1dd96a4c9b94c4b' /></a>
      </Link>
      <Link to={'/About'}>
        <a className='textLink' href='/About'>ABOUT</a>
      </Link>
      {/* <Link to={'/'}>
        <a className='hidden' href='/'>ABOUT</a>
      </Link> */}
    </nav>
  )
};

export default Navbars;
