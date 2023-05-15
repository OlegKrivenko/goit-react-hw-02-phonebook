import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Container from './components/Container';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactEditor';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = ({ name }) => {
    const contact = { id: nanoid(), name };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>

        <ContactEditor onSubmit={this.addContact} />
        <ContactList contacts={contacts}></ContactList>
      </Container>
    );
  }
}

export default App;
