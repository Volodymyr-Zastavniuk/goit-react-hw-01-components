import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;
export const Head = styled.thead`
  height: 50px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};

  th:nth-child(2) {
    border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
  }
`;

export const Body = styled.tbody`
  color: ${p => p.theme.colors.secondaryText};
  height: 50px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.secondaryText};
  text-align: center;
  border: 1px red;

  tr {
    height: 50px;
  }

  tr:nth-child(even) {
    background-color: ${p => p.theme.colors.gray};
  }
  td:nth-child(2) {
    border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  }

  td:nth-child(1) {
    text-transform: Capitalize;
    padding-left: 40px;
    text-align: left;
  }
`;
