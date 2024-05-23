import React from 'react';

const AboutMe = ({name, movie, music}) => {
  return (
    <div className='card about-me'>
      <h2>About Me</h2>
      <p>Name: {name}</p>
      <p>Favorite Movie: {movie}</p>
      <p>Favorite Music: {music}</p>
    </div>
  );
}

export default AboutMe;
