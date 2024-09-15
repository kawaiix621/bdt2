// src/components/Layout.js
import React from 'react';
import CodeEditor from './CodeEditor';

const Layout = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h2>Code Editor Layout</h2>
      <CodeEditor />
    </div>
  );
};

export default Layout;
