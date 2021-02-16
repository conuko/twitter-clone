import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar () {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/login' exact activeClassName='active'>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active'>
                        New Tweet
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}