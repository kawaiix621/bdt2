const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/run', (req, res) => {
    const { code } = req.body;
  
    try {
      let output = '';
      
      // Capture the output of console.log()
      const consoleLog = console.log;
      console.log = (message) => {
        output += message + '\n';
      };
  
      eval(code);  // Execute the provided code
  
      console.log = consoleLog;  // Restore the original console.log
      res.json({ output: output.trim() || 'No output' });
      consoleLog(output.trim());
    } catch (error) {
      res.json({ output: `Error: ${error.message}` });
    }
  });
  
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
