import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.Styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <>
      {options.map((el) => (<Button key={el} data-label={el} type="button" onClick={onLeaveFeedback}>
      {el}
    </Button>))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;