import {Link} from "react-router-dom";
import {StyledHeader} from './styles/header.styles';
import { FaRegHeart } from "react-icons/fa6";
import paw from '../img/paw.png'
import { ReactNode } from "react";

const linkList = [
    {name: 'About', path: '/about'},
    {name: <FaRegHeart />, path: '/favorites'}
]

const Header = () => {
    return (
        <StyledHeader>
            <h1 className="logo">
                <Link to="/">
                    <span><img src={paw} alt="Pawfully Captured paw print logo"/></span>
                    <h1>Pawfectly Captured</h1>
                </Link>
            </h1>
            <Navbar links={linkList}/>
        </StyledHeader>
    );
}

function Navbar(props: {
    links: {
        name: string | ReactNode,
        path: string
    }[]
}) {
    return (
        <nav>
            <ul id="primary-nav" className="nav-items">
                {props.links.map((link, i) => {
                    return (
                        <li key={i} className="nav-item">
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Header;