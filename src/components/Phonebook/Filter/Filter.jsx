import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Filter.Styled';

const Filter = ({ value, onChange }) => (
    <Input type="text" value={value} onChange={onChange} placeholder="Find contacts by name"/>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;