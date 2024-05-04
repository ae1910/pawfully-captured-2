import styled from 'styled-components';

type Props = {
    $padding?: string
    $bg?: string
    $color?: string
    $margin?: string
}

export const StyledButton = styled.button<Props>`
    border: none;
    border-radius: 50px;
    cursor: pointer;
    padding: ${({$padding}) => $padding || '15px 40px'};
    font-family: inherit;
    font-weight: 600;
    background-color: ${({$bg}) => $bg || 'var(--accent-color)'};
    color:  ${({$color}) => $color ||'#fff'};
    margin-right: ${({$margin}) => $margin ||'0'};


    img {
        width: 25px;
    }
`