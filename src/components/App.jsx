import React, { Component } from 'react';
import shortid from 'shortid';
import Form from './form/form';
import ContactList from './contactlist/contactlist';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = name => {
    const newContact = {
      id: shortid.generate(),
      name,
    };

    console.log(newContact);

    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Form contacts={contacts.length} onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <ContactList />
      </div>
    );
  }
}

export default App;
