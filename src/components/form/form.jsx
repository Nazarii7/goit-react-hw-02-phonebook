import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { onSubmit } = this.props;
    onSubmit(name, number);
    this.setState({ name: '', number: '' });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.hendleSubmit}>
        <h3>Name</h3>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.hendleChange}
            required
          />
        </label>
        <h3>Number</h3>
        <label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.hendleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
