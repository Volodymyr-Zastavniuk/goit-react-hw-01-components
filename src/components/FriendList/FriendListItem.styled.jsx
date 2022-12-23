import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.shadow};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semibold};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
`;

export const Status = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  width: 16px;
  height: 16px;
  border-radius: ${p => p.theme.radii.round};
`;
