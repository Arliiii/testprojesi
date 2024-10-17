import React from 'react';
import dark_arrow from '../../assets/dark-arrow.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>
          We inspire <span className='highlight'>growth</span> and <span className='highlight'>shape</span> the <span className='highlight'>leaders</span> of tomorrow
        </h1>
        <p>
          Welcome to Samsun University, a place where academic excellence meets personal growth. Our university is committed to providing high-quality education, fostering innovation, 
          and creating a dynamic learning environment.
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt=" " /></button>
      </div>
    </div>
  );
};

export default Hero;