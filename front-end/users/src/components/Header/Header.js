import React from 'react';
import { NavLink } from 'react-router-dom'



const Header = () => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="users/">Users</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="groups/">Groups</NavLink>
            </li>
        </ul>
    );
}

export default Header;