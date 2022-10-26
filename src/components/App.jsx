import React, { Component } from 'react';
import shortid from 'shortid';
import Form from './form/form';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = name => {
    const newNumber = {
      id: shortid(),
      name,
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newNumber],
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onAddContact={this.addContact} />

        <h2>Contacts</h2>
      </div>
    );
  }
}

export default App;
