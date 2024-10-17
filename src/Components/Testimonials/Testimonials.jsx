import React, { useRef } from 'react';
import back_icon from '../../assets/back-icon.png';
import next_icon from '../../assets/next-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.jpg';
import user_3 from '../../assets/user-3.jpg';
import user_4 from '../../assets/user-4.jpg';
import './Testimonials.css';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Abdireshid Mowlid</h3>
                  <span>Somaliland</span>
                </div>
              </div>
              <p>My time at Samsun University has been an incredible journey of personal and academic growth. 
                The campus is well-equipped with modern facilities, and the professors are always supportive and knowledgeable.
                 The diverse student community has enriched my university experience, providing opportunities to meet 
                 new people from various backgrounds.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Bejda Torbani</h3>
                  <span>Kosova</span>
                </div>
              </div>
              <p>Samsun University has been a fantastic place to pursue my education. The environment here is welcoming and encourages 
                students to strive for excellence. The professors are approachable,and the academic programs are designed to challenge
                 students in the best way possible. I’ve gained not only knowledge but also valuable life skills during my time here.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Arlinda Uruçi</h3>
                  <span>Albania</span>
                </div>
              </div>
              <p>As an international student, I was initially nervous about studying abroad, 
                but Samsun University quickly became a second home. The university provides a 
                balance of academic rigor and extra curricular activities, allowing me to grow both
                 personally and professionally. The friendships I’ve made and the experiences I’ve 
                 had here will stay with me for a lifetime. </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Ehsan Amini</h3>
                  <span>Afghanistan</span>
                </div>
              </div>
              <p>Studying at Samsun University has exceeded my expectations. The curriculum is challenging yet rewarding, 
                and the university's focus on practical applications of theory has prepared me for real-world situations.
                 The student services, such as the library and study groups, have been invaluable to my success.
                 I feel confident that this experience will help me in my future career.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;