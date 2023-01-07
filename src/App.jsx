import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Box from 'components/Box';
import { Headline } from 'components/Phonebook/Title';
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
      toast.error(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }))
    toast.success(`${contact.name} was added to contacts`);
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

  deleteContact = ({ id, name }) => {
    console.log(id, name);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    toast.warn(`${name} was deleted from contacts`);
  };

  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box p={5}
        backgroundImage="linear-gradient(45deg, rgb(0, 219, 222), rgb(252, 0, 255))">
        <Box
          bg="backgroundPrimary" boxShadow="small" borderRadius={8} p={5}  maxWidth="435px" mx="auto">
          <Headline HeadlineLogo>Phonebook</Headline>
          <Form onSubmit={this.addContact}></Form>
          <Headline>Contacts</Headline>
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}>
            <Filter value={filter} onChange={this.changeFilter} />
          </ContactList>
        </Box>
        <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
      </Box>
    )
  };
};

export default App;


