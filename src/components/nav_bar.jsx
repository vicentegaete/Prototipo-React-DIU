import React from 'react';
import { NavLink } from 'react-router-dom';
import users from '/src/data/users';

export const NavBar = () => {
  // Supongamos que tienes información sobre el usuario actual, por ejemplo, en el estado o contexto global
  const currentUser = users.find((user) => user.username === 'usuario'); // Cambia 'usuario' por el usuario actual
  console.log(currentUser.username)
  return (
    <nav className='nav-bar'> 
      {currentUser && currentUser.role === 'comun' && (
        <NavLink
          className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
          to='/mostrar'
        >
          Página de inicio
        </NavLink>
      )}
      {currentUser && currentUser.role === 'superusuario' && (
        <NavLink
          className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
          to='/internal'
        >
          Página Interna
        </NavLink>
      )}
    </nav>
  );
};

export default NavBar;
