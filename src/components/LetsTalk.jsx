import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/LetsTalk.css'; // Make sure to create and include this CSS file

const LetsTalk = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Sending email with the following data:', formData); // Log form data to console

    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
    emailjs.send('service_5lhnshl', 'template_qybim47', formData, 'lYziWcDxCRjt64A5E')
      .then((result) => {
        console.log('Email successfully sent!', result); // Log result to console
        alert('Message Sent Successfully');
      }, (error) => {
        console.error('Error sending email:', error); // Log error to console
        alert('An error occurred, please try again');
      });
  };

  return (
    <div id="letstalk" className="lets-talk-container">
      <div className="text-section">
        <h1>No Worries, <br />
          We Know What We're doing
        </h1>
        <p> Let's Talk </p>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <table className="contact-table">
            <tbody>
              <tr>
                <td><input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /></td>
                <td><input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required /></td>
              </tr>
              <tr>
                <td colSpan="2"><input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /></td>
              </tr>
              <tr>
                <td colSpan="2"><textarea name="message" placeholder="Ask something..." value={formData.message} onChange={handleChange} required /></td>
              </tr>
              <tr>
                <td colSpan="2"><button type="submit" className="send-button">Send</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default LetsTalk;
