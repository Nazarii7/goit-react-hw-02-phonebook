import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
  };

  nameInputID = shortid.generate();

  hendleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.hendleSubmit}>
        <label htmlFor={this.nameInputID}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.hendleChange}
            id={this.nameInputID}
            required
          />
        </label>
        <button type="button">Add contact</button>
      </form>
    );
  }
}

export default Form;
