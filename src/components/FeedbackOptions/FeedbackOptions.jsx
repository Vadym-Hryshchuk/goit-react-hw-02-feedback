import { Button, Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};
