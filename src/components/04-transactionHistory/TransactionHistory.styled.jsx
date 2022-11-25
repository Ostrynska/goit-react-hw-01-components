import styled from 'styled-components';

export const Table = styled.table`
 margin: auto;
 margin-top: ${p => p.theme.sizes.xs};
 width: ${p => p.theme.sizes.xl};
 border-collapse: collapse;
 box-shadow: ${p => p.theme.shadows.normal};
 transition: ${p => p.theme.transition};
 background-color: ${p => p.theme.colors.primary};
`;
export const Thead = styled.thead`
 height: 55px;
 background: ${p => p.theme.colors.secondary};
 text-transform: uppercase;
`;
export const TheadRow = styled.tr`
 color: ${p => p.theme.colors.primary};
`;
export const Tbody = styled.tbody``;
export const TbodyRow = styled.tr`
 height: 20px;
 text-transform: capitalize;
 text-align: center;
 transition: ${p => p.theme.transition};
 :nth-child(even) {
  background: ${p => p.theme.colors.muted};
 }
 :hover,
 :focus {
  background: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  transform: scale(1.03);
  transition: transform 0.3s ease-in-out 0s;
 }
`;
export const TheadItem = styled.th``;
export const TbodyItem = styled.td``;
