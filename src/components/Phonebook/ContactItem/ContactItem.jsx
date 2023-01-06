import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ContactItem.Styled';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <Item>
      <p>{name}: {number}</p>
      <button
        type="button"
        onClick={onDeleteContact}
      >
        delete
      </button>
    </Item>
  );
};

ContactItem.propTypes = {
   name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;