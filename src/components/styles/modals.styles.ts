import styled from 'styled-components';

type Props = {
    display?: string
}

export const StyledModal = styled.div<Props>`
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 40%);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-container {
        position: fixed;
        width: 100%;
        max-width: 1020px;
        background-color: var(--highlight-color);
        margin: auto;
        padding: 15px 30px;
        border: none;
        border-radius: 15px;
    }
    .close {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 1.75em;
        background-color: transparent;
    }
    .close:hover, .close:active {
        border: none;
    }
    .modal-image-container {
        width: 100%;
        max-height: calc(80vh - 200px);
        min-height: 100px;
        display: flex;
        justify-content: center;
    }
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 15px;
    }
    .card-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 15px 0;
        text-align: center;
    }
    .download-button {
        margin: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        min-width: 152px;
    }
    .download-button svg {
        font-size: 1.4em;
        /* width: 1rem; */
    }
    .modal-buttons p {
        text-align: center;
        font-size: 0.85em;
        margin: 12px 0 0;
    }
    .social-media-buttons {
        min-width: 162px;
        margin: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    h3 {
        margin: 8px 0 8px;
        font-size: 2.5em;
        padding: 0 5px;
        font-family: 'CatCafe', 'Franklin Gothic Medium', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    p {
        margin: 0 0 15px;
        padding: 0 5px;
        font-size: 1.1em;
        letter-spacing: 0.15px;
    }

    @media (min-width: 600px) {
        .modal-container {
            background-color: var(--highlight-color);
            margin: auto;
            padding: 15px 30px;
            border: none;
            width: 80%;
        }
        .modal-image-container {
            padding: 0 15px;
        }
        .card-info {
            flex-direction: row;
            justify-content: space-between;
            align-items: start;
            margin: 15px 0;
            text-align: left;
        }
    }
`