// src/components/Layout.js
import React from 'react';
import NavBar from './NavBar';
import CodeEditor from './CodeEditor';
import '../styles/layout.css'

const Layout = () => {
  return (
    <div>
      <NavBar/>
        <CodeEditor />
    </div>
  );
};

export default Layout;
