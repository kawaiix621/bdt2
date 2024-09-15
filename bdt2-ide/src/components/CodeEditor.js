// src/components/CodeEditor.js
import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import axios from 'axios';
import '../styles/codeeditor.css'

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here...');
  const [output, setOutput] = useState('');

  // Editor options for autocomplete, bracket matching, etc.
  const editorOptions = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    tabSize: 2,
    bracketPairColorization: { enabled: true },
    suggestOnTriggerCharacters: true,
    formatOnType: true,
  };

  const runCode = () => {
    axios.post('http://localhost:5000/run', { code })
      .then((response) => {
        setOutput(response.data.output);
      })
      .catch((error) => {
        setOutput(`Error: ${error.message}`);
      });
  };

  return (
    <div>
      <MonacoEditor
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={(newCode) => setCode(newCode)}
        height="500"
        options={editorOptions}
      />



      <div className='timeline'>
      <button onClick={runCode}>Audit Code</button>
        <pre>{output}</pre>
      </div>

    </div>
  );
};

export default CodeEditor;
