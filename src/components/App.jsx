import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.hendleSubmit}>
          <label htmlFor={this.nameInputId}>
            <span>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
              required
            />
          </label>
          <label htmlFor={this.numberInputID}>
            <span>Number</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputID}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h1>Contacts</h1>
        <ul>
          <li>Rosie Simpson: 645-17-79</li>
          <li>Hermione Kline: 443-89-12</li>
          <li>Eden Clements: 459-12-56</li>
        </ul>
      </div>
    );
  }
}

export default App;
