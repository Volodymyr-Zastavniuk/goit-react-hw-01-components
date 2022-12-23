import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
`;
