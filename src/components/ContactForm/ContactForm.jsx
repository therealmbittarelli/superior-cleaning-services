/**
 * Superior Cleaning Services
 *
 * @module /src/components/ContactForm/ContactForm.jsx
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries
import { useState } from 'react';

// CSS
import './ContactForm.css';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
/**
 * @component ContactForm
 * @description The site's ContactForm component.
 *
 */

const ContactForm = () => {

  const [ name, setName] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  const handleChange = (evt) => {
    evt.preventDefault();
    console.log('formd', name)
    if (evt.target === 'name') {
      setName(evt.target.value);
    }
    else if (evt.target === 'email') {
      setEmail(evt.target.value);
    }
    else if (evt.target === 'message') {
      setMessage(evt.target.value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("doop")
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name*
        <input type="text" value={name} id="name" onChange={(evt) => handleChange(evt)} required/>
      </label>

      <label htmlFor="email">
        Email*
        <input type="email" value={email} id="email" onChange={handleChange} required />
      </label>

      <label htmlFor="message">
        Message*
        <textarea id="message" value={message} onChange={handleChange} required/>
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm;