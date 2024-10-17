import React from 'react';
import location_icon from '../../assets/location-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import msg_icon from '../../assets/msg-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c60b446f-e6ad-4a7c-8d31-fb00cde52317");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt=" " /></h3>
        <p>Send us a message and let’s connect! Whether you have questions, feedback, or just want to reach out,
           we’re here to help. Fill out the form below, and we’ll get back to you as soon as possible!</p>

        <ul>
          <li><img src={mail_icon} alt="" />oidb@samsun.edu.tr</li>
          <li><img src={phone_icon} alt="" />0362 313 00 55</li>
          <li><img src={location_icon} alt="" />Ballica Kampüsü, Ondokuzmayis/Samsun</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now
            <img src={white_arrow} alt='' /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;