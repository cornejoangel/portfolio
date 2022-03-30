import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Contact.scss';

const Contact = (props) => {
  const { width } = props;

  let contact = '';
  contact = (
    <div className="contact-content">
      <p>angelcornejodev.gmail.com</p>
      <a
        href="https://github.com/cornejoangel"
        target="_blank"
        rel="noreferrer"
      >
        github.com/cornejoangel
      </a>
      <p className="call-to-action">Let's work together.</p>
    </div>
  );

  return contact;
};

Contact.propTypes = {
  width: PropTypes.number,
};

export default Contact;
