import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Criot-FSBM.png';
import  '../components/header.css';


function Header() {
  return (  
    <header>
  <nav>
    
    <div className="logo-container">
      <img src={logo} alt="CRIOT Logo" />
      <h1>Club CRIOT</h1>
    </div>
    <ul>
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/events">Événements</Link></li>
      <li><Link to="/join">Rejoindre</Link></li>
    </ul>
    
  </nav>
</header>

  );
}


export default Header;

