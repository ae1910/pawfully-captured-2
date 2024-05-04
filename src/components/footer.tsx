import {Link} from "react-router-dom";
import { StyledFooter } from "./styles/footer.styles";

const Footer = () => {
    return (
        <StyledFooter>
            <Link to="/">Pawfectly Captured</Link>
            <p>&#169; 2023 Pawfectly Captured. All rights reserved.</p>
        </StyledFooter>
    );
}

export default Footer;