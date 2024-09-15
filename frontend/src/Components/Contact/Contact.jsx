import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
      form.current,
      'YOUR_USER_ID' // Replace with your EmailJS User ID
    )
    .then((result) => {
      console.log('Message sent successfully:', result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log('Failed to send message:', error.text);
      alert('Failed to send message, please try again later.');
    });

    e.target.reset();
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <input type="text" id="name" name="user_name" placeholder='Name' required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="user_email" required placeholder='Email ID'/>
        </div>
        <div className="form-group">
          <input type="text" id="subject" name="subject" required placeholder='Subject'/>
        </div>
        <div className="form-group">
          <textarea id="message" name="message" cols="40" rows="4" required placeholder='Enter your message' ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
