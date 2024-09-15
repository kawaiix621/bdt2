// src/components/Layout.js
import React from 'react';
import '../styles/navbar.css'

const NavBar = () => {
  return (
    <div className='nav'>
        <di>
        <button>Project</button>
    <button>Files</button>
    <button>Stage</button>
    <button className='run'>Deploy :)</button>
        </di>

        <div>
        <button>Nodes</button>
        </div>
    </div>
  );
};

export default NavBar;
