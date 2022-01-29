import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ContactForm.scss';

const ContactForm = (props) => {
  const { width } = props;

  let form = '';
  form = (
    <form className="contact-form">
      <label className="email-label" htmlFor="contact-email">
        Send me a message
      </label>
      <input
        type="email"
        id="contact-email"
        placeholder="name@email.com"
        required
      />
      <textarea id="contact-message" required />
      <input type="submit" id="submit" value="Send" />
    </form>
  );

  return form;
};

ContactForm.propTypes = {
  width: PropTypes.number,
};

export default ContactForm;
