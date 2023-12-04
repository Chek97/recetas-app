import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/recipe_logo.png';

import './navbar.css';

export const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleTooggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className='navbar'>
            <Link className='navbar__image' to="/">
                <img src={logo} alt="logo de la aplicacion" />
            </Link>
            <ul className={`navbar__list ${toggle ? 'active' : ''}`}>
                <li className="navbar__list__item">
                    <Link to="/">Inicio</Link>
                </li>
                <li className='navbar__list__item'>
                    <Link to="/search"><i className="fa fa-search" aria-hidden="true"></i> Buscar</Link>
                </li>
            </ul>
            <div className={`navbar__toggle ${toggle && 'navbar__toggle--rotate'}`} onClick={handleTooggle}>
                |||
            </div>
        </div>
    )
}
