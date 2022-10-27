import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name }) => (
      <li key={id}>
        <p>{name}</p>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
