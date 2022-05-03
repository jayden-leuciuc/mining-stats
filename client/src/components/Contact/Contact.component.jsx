import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.styles.scss';

function Contact() {
  return (
    <div className='contact-container'>
      <form>
        <label for='email'>Email:</label>
        <input type='text' id='email' name='email' />

        <label for='sbline'>Subject Line:</label>
        <input type='text' id='sbline' name='sbline' />

        <label for='reason'>Reason For Contacting Support</label>
        <input type='text' id='reason' name='reason' />

        <label for='details'>Details</label>
        <input type='text' id='details' name='details' className='details' />
        <Link to='/' className='contact-submit-button'>
          <input type='submit' value='Submit' className='form-button'></input>
        </Link>
      </form>
    </div>
  );
}
export default Contact;
