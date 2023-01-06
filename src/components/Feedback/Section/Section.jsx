import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/Box';
import { SectionTitle } from './Section.Styled';

const Section = ({ title, children }) =>
  <Box pb={5}>
    <SectionTitle
      >{title}</SectionTitle>
      {children}
    </Box>;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;