import styled from 'styled-components';

export const ProfileCard = styled.div`
 margin: auto;
 background-color: ${p => p.theme.colors.primary};
 width: ${p => p.theme.sizes.s};
 text-align: center;
 box-shadow: ${p => p.theme.shadows.accent};
 border-radius: ${p => p.theme.radii.normal};
 borders: ${p => p.theme.borders.normal};
 transition: ${p => p.theme.transition};

 :hover,
 :focus {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out 0s;
 }
`;
export const Description = styled.div`
 line-height: ${p => p.theme.lineHeights.body};
 padding: ${p => p.theme.space[4]}px;
`;
export const Avatar = styled.img`
 margin-top: ${p => p.theme.space[4]}px;
 margin-bottom: ${p => p.theme.space[4]}px;
 margin-left: auto;
 margin-right: auto;
`;
export const Name = styled.p`
 margin-top: ${p => p.theme.space[4]}px;
 margin-bottom: ${p => p.theme.space[4]}px;
 font-size: ${p => p.theme.fontSizes.m};
 font-weight: ${p => p.theme.fontWeights.bold};
 line-height: ${p => p.theme.lineHeights.body};
 letter-spacing: ${p => p.theme.letterSpacing};
`;
export const Tag = styled.p`
 margin-bottom: ${p => p.theme.space[24]}px;
 color: ${p => p.theme.colors.secondary};
`;
export const Location = styled.p`
 color: ${p => p.theme.colors.secondary};
`;
export const Stats = styled.div`
 display: ${p => p.theme.display.grid};
 grid-template-columns: repeat(3, 1fr);
 grid-column-gap: 5px;
 background-color: ${p => p.theme.colors.accent};
 border-bottom-left-radius: 5px;
 border-bottom-right-radius: 5px;
`;
export const StatsItem = styled.li`
 padding-top: ${p => p.theme.space[4]}px;
 padding-bottom: ${p => p.theme.space[4]}px;
 :not(:first-child) {
  border-left: 1px solid #ecf0f1;
 }
`;
export const Label = styled.span`
 display: ${p => p.theme.display.block};
 margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Quantity = styled.span`
 font-weight: ${p => p.theme.fontWeights.bold};
`;
