import React from 'react';
import PropTypes from 'prop-types';
import { Item, List } from './ContactList.Styled';

const ContactList = ({contacts, onDeleteContact}) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>{name}: {number}</p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;