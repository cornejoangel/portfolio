import React from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  let contact = '';
  contact = (
    <div className="contact-content">
      <p>angelcornejodev@gmail.com</p>
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

export default Contact;
