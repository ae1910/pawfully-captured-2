import { StyledLoader } from "./styles/loader.styles";
import paw from '../img/paw.png'

const Loader = () => {
    return (
        <StyledLoader>
            <div className="loader">
                <div className="paw">
                    <img src={paw} alt="paw print"/>
                </div>
                <div className="paw">
                    <img src={paw} alt="paw print"/>
                </div>
                <div className="paw">
                    <img src={paw} alt="paw print"/>
                </div>
                <div className="paw">
                    <img src={paw} alt="paw print"/>
                </div>
                <div className="paw">
                    <img src={paw} alt="paw print"/>
                </div>
                <div className="paw">
                    <img src={paw} alt="paw print"/>
                </div>
            </div>
            <p>LOADING...</p>
        </StyledLoader>
    );
}

export default Loader;