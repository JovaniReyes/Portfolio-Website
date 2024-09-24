import './FormStyles.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SS, process.env.REACT_APP_EMAILJS_TD, form.current, process.env.REACT_APP_EMAILJS_PK)
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
  <div className="form">
    <form ref={form} onSubmit={sendMail}>
      <label>Name</label>
      <input type="text" name="name" required/>

      <label>Email</label>
      <input type="email" name="email" required/>

      <label>Subject</label>
      <input type="text" name="subject" required/>
      
      <label>Message</label>
      <textarea name="message" rows="6" placeholder='Type message here' required></textarea>
      <button className="btn" type="submit"> Submit</button>
      </form>
    </div>
  );
};
export default Form;
