import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/layout.css';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to='/' classname={({ isActive }) => isActive ? "activo" : undefined}>Home</ NavLink></li>
                    <li><NavLink to='nosotros' classname={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
                    <li><NavLink to='servicios' classname={({ isActive }) => isActive ? "activo" : undefined}>Servicios</NavLink></li>
                    <li><NavLink to='contacto' classname={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </div>

        </nav>


    );
}
export default Nav;