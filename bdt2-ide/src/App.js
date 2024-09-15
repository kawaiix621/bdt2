import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import axios from 'axios';

const App = () => {
  const [code, setCode] = useState('// Write your code here...');
  const [output, setOutput] = useState('');

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
      <h2>Simple IDE</h2>
      <MonacoEditor
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={newCode => setCode(newCode)}
        height="400"
      />
      <button onClick={runCode}>Run Code</button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default App;
