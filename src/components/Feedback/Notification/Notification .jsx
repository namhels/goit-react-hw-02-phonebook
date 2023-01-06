import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/Box';

const Notification = ({ message }) =>
  <Box
    color="secondary"
    fontFamily='body'
    fontSize='l'
    fontWeight='bold'
  >{message}</Box>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;