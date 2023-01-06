import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsItem } from './Statistics.Styled';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <>
      <StatisticsItem>Good: {good}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem>Bad: {bad}</StatisticsItem>
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive feedback: {positivePercentage}</StatisticsItem>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Statistics;