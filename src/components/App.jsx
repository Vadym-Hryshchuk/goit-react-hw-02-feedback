import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Sections } from './Sections/Sections';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeFeedback = key =>
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));

  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (totalFeedback, value) => totalFeedback + value,
      0
    );

  countPositiveFeedbackPercentage = () =>
    this.state.good > 0 ? (
      `${Math.floor((this.state.good / this.countTotalFeedback()) * 100)}%`
    ) : (
      <Notification message="No positive feedback!" />
    );

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Sections title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.changeFeedback}
          />
        </Sections>
        <Sections title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Sections>
      </>
    );
  }
}
