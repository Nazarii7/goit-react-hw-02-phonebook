import React from 'react';
import { PropTypes } from 'prop-types';

const ContactList = ({ filteredContacts, onRemove }) => {
  return (
    filteredContacts.length > 0 && (
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <span>{name}:</span>
              <span>{number}</span>
              <button onClick={() => onRemove(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    )
  );
};

ContactList.propTypes = {
  states: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
