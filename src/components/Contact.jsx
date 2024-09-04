import React, { useRef, useState } from 'react';
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState(null); // State for popup message
  const [showPopup, setShowPopup] = useState(false); // State for controlling the popup visibility
  const [emailError, setEmailError] = useState(''); // State for email error message

  const validateEmail = (email) => {
    // Simple regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError(''); // Clear any previous errors

    emailjs
      .sendForm('service_7b3df09', 'template_yrf4loe', form.current, {
        publicKey: 'IBrK5yKC-DhD3eljb',
      })
      .then(
        () => {
          setPopupMessage('Message sent successfully!'); // Success message
          setShowPopup(true); // Show popup
          setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
        },
        (error) => {
          setPopupMessage('Failed to send message. Please try again.'); // Failure message
          setShowPopup(true); // Show popup
          setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
        }
      );
  };

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="my-20 text-center text-4xl">Contact Me</motion.h2>
      
      <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          
          <label>Email</label>
          <input type="email" name="user_email" required />
          {emailError && <p className="error-message">{emailError}</p>} {/* Display email error */}
          
          <label>Message</label>
          <textarea name="message" required />
          
          <input type="submit" value="Send" />
        </form>
      </motion.div>
      
      {/* <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="mailto:ninadkarkhanis2003@gmail.com" className="border-b text-cyan-600">{CONTACT.email}</a>
      </div> */}

      {showPopup && (
        <div className="popup">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
