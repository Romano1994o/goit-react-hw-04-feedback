import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Container } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  handleFeedback = option => {
    this.setState(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

  

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const options = ['good', 'neutral', 'bad'];
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
   

    return (
      <Container>
        <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.handleFeedback} options={options} />
        </Section>

        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
  good={this.state.good}
  neutral={this.state.neutral}
  bad={this.state.bad}
  total={totalFeedback}
  positivePercentage={positivePercentage}
/>
          )}
        </Section>
      </Container>
    );
  }
}
