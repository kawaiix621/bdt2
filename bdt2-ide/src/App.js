import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import axios from 'axios';

const App = () => {
  const [code, setCode] = useState('// Write your code here...');
  const [output, setOutput] = useState('');

  // Editor options for autocomplete, bracket matching, etc.
  const editorOptions = {
    selectOnLineNumbers: true, // Enables line number selection
    automaticLayout: true,     // Resizes editor on container resize
    tabSize: 2,                // Set tab size
    bracketPairColorization: { enabled: true }, // Enable bracket coloring
    suggestOnTriggerCharacters: true,           // Enable autocomplete suggestions
    formatOnType: true,         // Automatically formats code on typing
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
      <h2>Simple IDE</h2>
      <MonacoEditor
        language="javascript" // Language for syntax highlighting and autocomplete
        theme="vs-dark"       // Dark theme for the editor
        value={code}          // Initial code value
        onChange={newCode => setCode(newCode)} // Handle code changes
        height="400"          // Set editor height
        options={editorOptions} // Pass custom options to the editor
      />
      <button onClick={runCode}>Run Code</button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre> {/* Display the output of the code */}
      </div>
    </div>
  );
};

export default App;
