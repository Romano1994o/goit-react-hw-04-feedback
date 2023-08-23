
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Container } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const { useState } = require('react');

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood (prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral (prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad (prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  const options = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleFeedback} options={options} />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </Container>
  );
};
