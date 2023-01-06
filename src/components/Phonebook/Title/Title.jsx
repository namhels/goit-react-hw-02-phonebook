import React from 'react';
import PropTypes from 'prop-types';
import {Headline} from './Title.Styled';

const Title = ({text}) => <Headline>{text}</Headline>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;