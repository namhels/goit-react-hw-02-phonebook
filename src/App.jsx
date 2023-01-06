import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Box from 'components/Box';
import Title from 'components/Phonebook/Title';
import Form from 'components/Phonebook/Form';
import ContactList from 'components/Phonebook/ContactList';
import  Filter  from 'components/Phonebook/Filter';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find((el) => el.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }))
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box p={5} bg="backgroundPrimary">
        <Title text='Phonebook'></Title>
        <Form onSubmit={this.addContact}></Form>
        <Title text='Contacts'></Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    )
  };
};

export default App;


