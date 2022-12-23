import styled from 'styled-components';

export const Avatar = styled.img`
  border-radius: 50%;
  width: 250px;
  margin-bottom: ${p => p.theme.space[0]}px;
  margin-top: ${p => p.theme.space[5]}px;
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semibold};
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
`;

export const UserInfo = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.secondaryText};
  margin-bottom: ${p => p.theme.space[0]}px;
`;
export const UserStatsList = styled.ul`
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  display: flex;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.secondaryText};
  background-color: ${p => p.theme.colors.gray};
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 0px;
  width: calc(100% / 3);

  &:nth-of-type(2) {
    border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  }
  & :nth-child(2) {
    font-weight: ${p => p.theme.fontWeights.semibold};
    color: ${p => p.theme.colors.black};
  }
`;
