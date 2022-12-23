import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.semibold};
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-grow: 1;
  gap: ${p => p.theme.space[2]}px;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${randomColor};
`;
export const StatsPercentage = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;

function randomColor() {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
}
