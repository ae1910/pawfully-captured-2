import styled from 'styled-components';

export const StyledCard = styled.div`
    position: relative;

    .pet-card {
        margin-bottom: 15px;
    }


    img {
        width: 100%;
    }
    .image-container {
        position: relative;
        max-height: 100%;
        max-width: 100%;
        min-height: 55px;
        width: 100%;
        height: 0;
        box-sizing:border-box;
        background-color: #917C78;
        border-radius: 15px;
        cursor: zoom-in;

        img {
            position: absolute;
            height: auto;
            border-radius: 15px;
        }
    }

    
    .card-options {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0 ,0.3);
        border-radius: 15px;
        padding: 0.68em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        visibility: hidden;
    }
    .top-options {
        display: flex;
        justify-content: space-between;
    }
    .checkbox {
        display: block;
        position: relative;
        cursor: pointer;
    }
    input[type=checkbox] {
        visibility: hidden;
    }
    span {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.75px solid var(--highlight-color);
        border-radius: 5px;
        /* width: 1.1em;
        height: 1.1em; */
        font-size: 1.3em;
        background-color: var(--highlight-color);
    }
    span:hover, .checkbox input:checked ~ span:hover {
        border: 0.75px solid var(--accent-color);
    }
    .checkbox input:checked ~ span {
        background-color: #B1C50C;
        border: 0.75px solid #B1C50C;
        visibility: visible;
    }

    .download-button {
        font-size: 1.35em;
    }
    .save-button {
        background-color: transparent;
        font-size: 1.6em;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            fill: var(--highlight-color);
        }
        &.active svg {
            fill: red;
        }
        &.active {
            visibility: visible;
        }
    }
    h3 {
        margin: 8px 0 3px;
        font-size: 1.1em;
        padding: 0 5px;
        font-family: 'CatCafe', 'Franklin Gothic Medium', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    p {
        margin: 0 0 15px;
        padding: 0 5px;
        font-size: 1em;
        letter-spacing: 0.15px;
    }

    .mobile-options {
        padding: 8px 5px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .save-button {
            font-size: 1.35em;
        }
        .download-button {
            font-size: 1.25em;
        }
        .save-button svg {
            fill: var(--accent-color);
        }
    }

    @media (max-width: 579px) {
        .check-container {
            visibility: visible;
        }
    }
    @media (min-width: 580px) {
        .mobile-options {
            display: none;
        }
        .image-container:hover .card-options {
            visibility: visible;
        }
    }
`