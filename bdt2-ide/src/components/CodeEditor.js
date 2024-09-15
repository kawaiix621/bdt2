// src/components/CodeEditor.js
import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import axios from 'axios';

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
        height="400"
        options={editorOptions}
      />
      <button onClick={runCode}>Run Code</button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
