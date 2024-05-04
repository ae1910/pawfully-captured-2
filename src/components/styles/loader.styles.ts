import styled from 'styled-components';

export const StyledLoader = styled.div`
    /* position: absolute; */
    /* top: 25%;
    left: 50%; */
    /* transform-origin: 50% 50%;
    transform: translate(-50%, 0); */
    display: flex;
    flex-direction: column;
    align-items: center;

    .loader {
        display: flex;
        height: 110px;
    }
    .paw {
        width: 40px;
        height: 40px;
        animation: 2050ms pawAnimation ease-in-out infinite;
        opacity: 0;
        
        img{
            width: 100%;
        }

        &:nth-child(odd){
            transform: rotate(80deg);
        }
        &:nth-child(even){
            transform: rotate(100deg) translate(125%, 0) scaleX(-1);
        }

        &:nth-child(6){
            animation-delay: 1.5s;
        }
        &:nth-child(5){
            animation-delay: 1.2s;
        }
        &:nth-child(4){
            animation-delay: 0.9s;
        }
        &:nth-child(3){
            animation-delay: 0.6s;
        }
        &:nth-child(2){
            animation-delay: 0.3s;
        }
        &:nth-child(1){
            animation-delay: 0;
        }
    }

    @keyframes pawAnimation {
        0%{
            opacity: 1;
        }
        50%{
            opacity: .35;
        }
        100%{
            opacity: 0;
        }
    }
    p {
        margin: 0;
    }
`