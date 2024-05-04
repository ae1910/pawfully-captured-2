import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    height: 105px;
    width: 100%;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    
    button {
        display: none;
    }
    .logo {
        font-family: 'CatCafe', 'Franklin Gothic Medium', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        
        a {
            display: flex;
            align-items: center;
            font-size: 0.5em;
        }
        img {
            width: 30px;
            margin-right: 5px;
        }
        h1 {
            display: none;
        }
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ul {
        display: flex;
        flex-direction: row;
        gap: 2.5vw;
        list-style: none;
        font-size: 1em
    }
    .nav-items {
        display: flex;
        align-items: center;
    }
    svg {
        font-size: 1.5em;
    }

    @media (min-width: 500px) {
        .logo h1 {
            display: block;
        }
    }
`