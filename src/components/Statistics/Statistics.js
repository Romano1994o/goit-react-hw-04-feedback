import PropTypes from 'prop-types';
import {Feedback, Total, Percentage } from './Statistics.styled';

export const Statistics = ({
  good, neutral, bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <Feedback>Good: {good}</Feedback>
      <Feedback>Neutral: {neutral}</Feedback>
      <Feedback>Bad: {bad}</Feedback>
      <Total>
        Total: <span>{total}</span>
      </Total>
      <Percentage >
        Positive feedbacks: <span>{positivePercentage}</span>%
      </Percentage>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.object,
  neutral: PropTypes.object,
  bad: PropTypes.object,
  totalFeedbacks: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
};
