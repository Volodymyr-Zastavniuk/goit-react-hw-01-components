import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  Title,
  StatsList,
  StatsItem,
  StatsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      m="0 auto"
      mb="20px"
      width="400px"
      textAlign="center"
      boxShadow="shadow"
      borderRadius="normal"
      overflow="hidden"
    >
      {title && <Title className="title">Upload stats</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id}>
              <span>{label}</span>
              <StatsPercentage>{percentage}</StatsPercentage>
            </StatsItem>
          );
        })}
      </StatsList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
