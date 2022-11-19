import styled from 'styled-components'

export const Friends = styled.ul`
    margin: auto;
    margin-top: ${p => p.theme.sizes.xs};
    width: ${p => p.theme.sizes.s};
`

export const FriendListItem = styled.li`
    margin-bottom: 5px;
    display: ${p => p.theme.display.inlineFlex};
    align-items: center;
    justify-content: flex-start;
    gap: ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.primary};
    width: ${p => p.theme.sizes.s};
    height: 64px;
    box-shadow: ${p => p.theme.shadows.accent};
    border-radius: ${p => p.theme.radii.normal};
    transition: ${p => p.theme.transition};

    :hover,
    :focus {
    background-color: ${p => p.theme.colors.accent};
    color:  ${p => p.theme.colors.white};
    font-weight: ${p => p.theme.fontWeights.bold};
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out 0s;
`
export const FriendAvatar = styled.img`
`
export const FriendStatus = styled.span`
    width: 10px;
    height: 10px;
    margin-left: 10px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.children ? p.theme.colors.background : p.theme.colors.secondary 
    }
`
export const FriendName = styled.p`
    margin-left: 12px;
`
