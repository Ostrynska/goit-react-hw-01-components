import styled from 'styled-components'

export const StatisticSection = styled.section`
    margin: auto;
    margin-top: ${p => p.theme.sizes.xs};
    display: ${p => p.theme.display.block};
    background-color: ${p => p.theme.colors.primary};
    width: ${p => p.theme.sizes.m};
    box-shadow: ${p => p.theme.shadows.accent};
    border-radius: ${p => p.theme.radii.normal};
    transition: ${p => p.theme.transition};
`

export const StatisticTitle = styled.h2`
    padding-top: ${p => p.theme.sizes.xs};
    padding-bottom: ${p => p.theme.sizes.xs};
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.heading};
    text-transform: uppercase;
    text-align: center;
`

export const StatisticList = styled.ul`
    display: ${p => p.theme.display.grid};
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
`
export const StatisticItem = styled.li`
   :not(:first-child) {
   border-left: 1px solid #ECF0F1;
   }
    :hover,
    :focus {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out 0s;
`
export const StatisticLabel = styled.span`
    margin-top: ${p => p.theme.sizes.xs};
    font-size: ${p => p.theme.fontSizes.xs};
`
export const StatisticPercentage = styled.span`
    margin-top: 10px;
    margin-bottom: ${p => p.theme.sizes.xs};
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
`



