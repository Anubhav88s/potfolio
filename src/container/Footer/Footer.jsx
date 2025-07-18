import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import * as images from "../../assets";
import AppWrap from '../../Wrapper/AppWrap'; 
import './Footer.scss';
import Resume from '../../assets/Resume.pdf';
import MotionWrap1 from '../../Wrapper/MotionRap1';

const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: username,
      from_email: email,
      to_name: 'Anubhav Raj Singh',
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      }, (error) => {
        setLoading(false);
        console.log('FAILED...', error);
      });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <div className="p-text">anubhavrajsinghu@gmail.com</div>
        </div>
      <a style={{ textDecoration: 'none' }} href={Resume} download="Resume" className="p-text">
       <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a style={{ fontWeight:'bold', fontSize:"1rem" }}href={Resume} download='Resume' className="p-text">Download Resume</a>
        </div>
        </a>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div  className="app__flex ">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} required />
          </div>
          <div className="app__flex ">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} required />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="submit" className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap1(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);