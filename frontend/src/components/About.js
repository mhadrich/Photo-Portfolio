import React from 'react';
import './css/About.css'

const About = () =>{
  return (
    <div className='about'>
      <h1>Who is Malek?</h1>
      <p>Started photography as an amateur with a sincere love for the craft.<br />
        Although I didn't have any access to any camera gear at the beginning, that didn't stop me.<br />
        My phone's camera was more than enough to start my journey.<br /> I first started retouching and editing photos around 2008,<br /> got my first
        camera kit around 2012.<br /> And oh what a journey it was!
      </p>
      <h1>Where can you find me?</h1>
      <p>Available across many plateforms and services</p>
      <a href="mailto:hadrichmalek@gmail.com" ><img draggable="false" src='https://cdn0.iconfinder.com/data/icons/social-media-and-logos-11/32/Gmail_envelope_letter_email_Gmail_envelope_letter_email-48.png'/></a>
      <a href="https://www.linkedin.com/in/malek-hadrich-ba820141/" target='_blank'><img draggable="false" src='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_LinkedIn-48.png'/></a>
      <a href="https://www.behance.net/whityxx" target='_blank'><img draggable="false" src='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Behance-48.png'/></a>
      <a href="https://github.com/mhadrich" target='_blank'><img draggable="false" src='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Github-48.png'/></a>
      <a href="tel:55795324"><img draggable="false" src='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Whatsapp_telephone_handset-48.png'/></a>
    </div>
  )
}

export default About;