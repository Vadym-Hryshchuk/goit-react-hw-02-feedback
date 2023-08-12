import { Notification } from 'components/Notification/Notification';
import { StatisticsList } from './Statistics.styled';

export const Statistics = ({
  bad,
  good,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total() ? (
        <StatisticsList>
          <li>
            <p>Good:</p>
            <span>{good}</span>
          </li>
          <li>
            <p>Neutral:</p>
            <span>{neutral}</span>
          </li>
          <li>
            <p>Bad:</p>
            <span>{bad}</span>
          </li>
          <li>
            <p>Total:</p>
            <span>{total()}</span>
          </li>
          <li>
            <p>Positive feedback:</p>
            <span>{positivePercentage()}</span>
          </li>
        </StatisticsList>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
