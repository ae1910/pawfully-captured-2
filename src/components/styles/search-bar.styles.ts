import styled from 'styled-components';

export const StyledSearchBar = styled.form`
    border-radius: 65px;
    border: 0.75px solid var(--accent-color);
    max-width: 750px;
    width: 100%;
    height: 3rem;
    background-color: var(--highlight-color);
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        width: calc(100% - 90px);
        height: 100%;
        padding: 0 15px 0 18px;
        font-size: 1em;
        background-color: transparent;
        border: none;
        outline: none;
        font-family: var(--body-font);
    } 
    button {
        cursor: pointer;
        height: 100%;
        width: 90px;
        background-color: var(--accent-color);
        border: none;
        border-radius: 65px;
    }
    img {
        width: 25px;
        pointer-events: none;
    }
`