import React from 'react';
import About_ from '../../assets/about.jpeg';
import play_icon from '../../assets/play-icon.png';
import './About.css';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={About_} alt="" className='about' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>We inspire growth, foster learning, and shape the leaders of tomorrow</h2>
        <p>Welcome to Samsun University, a place where academic excellence meets personal growth. Our university is 
          committed to providing high-quality education, fostering innovation, and creating a dynamic learning environment.
           With state-of-the-art facilities, expert faculty, and a diverse student community, we offer the perfect setting to
            pursue your academic and professional goals.Join us at Samsun University and become part of a vibrant and forward-thinking institution 
        </p>
        <p>We believe in fostering academic excellence, creativity, and character development, ensuring that our students are well-equipped for future challenges.

        </p>
        <p>
          Our school is committed to nurturing the potential of every student by providing a dynamic and supportive learning environment.
          At our school we are not just building futures; we are shaping leaders of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default About;